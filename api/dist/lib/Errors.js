import { GraphQLError } from "graphql/error";
export const AuthorizationError = new GraphQLError("Войди в свой аккаунт сначала!", {
    extensions: { code: "UNAUTHENTICATED" }
});
export const ForbiddenError = new GraphQLError("У вас нет прав для совершения данного действия.", { extensions: { code: "FORBIDDEN" } });
