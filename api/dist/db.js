import mongoose from "mongoose";
const db = {
    connect: async (DB_HOST) => {
        await mongoose.connect(DB_HOST);
        mongoose.connection.on("error", (err) => {
            console.log("MongoDB connection error. Давай запусти Монго, ЭЙ!");
            console.error(err);
            process.exit();
        });
    },
    close: async () => {
        await mongoose.connection.close();
    }
};
export default db;
