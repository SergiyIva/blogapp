import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import "dotenv/config";
import fs from "fs";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.mjs";
import depthLimit from "graphql-depth-limit";
import complexity from "graphql-validation-complexity";
import helmet from "helmet";
import { JwtPayload } from "jsonwebtoken";

import resolvers from "./resolvers/index.js";
import { setContext } from "./lib/setContext.js";
import db from "./db.js";
import handlers from "./lib/handlers.js";
import { Models } from "./models/index.js";

export interface ServerContext {
  models: Models;
  user?: JwtPayload;
}

const host = process.env.HOST;
const port = process.env.PORT || 4000;
const dbHost = process.env.DB_HOST;
const typeDefs = fs.readFileSync("./src/typeDefs.graphql", "utf-8");
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<ServerContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  validationRules: [depthLimit(15), complexity.createComplexityLimitRule(1000)],
  csrfPrevention: false
});
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'unsafe-inline'", "localhost", "*"],
        "script-src": ["'unsafe-inline'", "localhost", "*"]
      }
    }
  })
);
app.use(compression());
await db.connect(dbHost);

process.on("uncaughtException", async (err) => {
  console.error("НЕПЕРЕХВАЧЕННОЕ ИСКЛЮЧЕНИЕ\n", err.stack);
  await db.close();
  process.exit(1);
});
await server.start();
app.use(graphqlUploadExpress({ maxFileSize: 10_000_000, maxFiles: 1 }));
app.use(
  "/graphql",
  cors<cors.CorsRequest>({origin: ["*"]}),
  bodyParser.json(),
  expressMiddleware(server, {
    context: setContext
  })
);
app.use(express.static("./public"));
app.get("/*", handlers.getApp);
app.use(handlers.handleError);
await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
console.log(`🚀 Server ready at http://${host}:${port}/graphql`);
