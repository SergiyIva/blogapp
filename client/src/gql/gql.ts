/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  mutation SignUp($username: String!, $password: String!) {\n    signUp(username: $username, password: $password)\n  }\n":
    types.SignUpDocument,
  "\n  mutation SignIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password)\n  }\n":
    types.SignInDocument,
  "\n  mutation DeletePost($id: ID!) {\n    deletePost(id: $id)\n  }\n":
    types.DeletePostDocument,
  "\n  mutation NewPost($title: String!, $content: String!, $file: Upload) {\n    newPost(title: $title, content: $content, file: $file) {\n      ...PostFragment\n    }\n  }\n":
    types.NewPostDocument,
  "\n  mutation EditPost($id: ID!, $title: String, $content: String, $file: Upload) {\n    updatePost(id: $id, title: $title, content: $content, file: $file) {\n      id\n      content\n      title\n      updatedAt\n      media\n    }\n  }\n":
    types.EditPostDocument,
  "\n  query IsLoggedIn @client {\n    isLoggedIn\n  }\n":
    types.IsLoggedInDocument,
  "\n  query GetMe {\n    getMe {\n      id\n      username\n    }\n  }\n":
    types.GetMeDocument,
  "\n  fragment PostFragment on Post {\n    id\n    title\n    content\n    author {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    media\n  }\n":
    types.PostFragmentFragmentDoc,
  "\n  query GetPosts($cursor: Int) {\n    getPosts(cursor: $cursor) {\n      posts {\n        ...PostFragment\n      }\n      totalPosts\n    }\n  }\n":
    types.GetPostsDocument,
  "\n  query GetPost($id: ID!) {\n    getPost(id: $id) {\n      ...PostFragment\n    }\n  }\n":
    types.GetPostDocument,
  "\n  query GetMyPost {\n    getMe {\n      id\n      posts {\n        ...PostFragment\n      }\n    }\n  }\n":
    types.GetMyPostDocument
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SignUp($username: String!, $password: String!) {\n    signUp(username: $username, password: $password)\n  }\n"
): (typeof documents)["\n  mutation SignUp($username: String!, $password: String!) {\n    signUp(username: $username, password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SignIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password)\n  }\n"
): (typeof documents)["\n  mutation SignIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeletePost($id: ID!) {\n    deletePost(id: $id)\n  }\n"
): (typeof documents)["\n  mutation DeletePost($id: ID!) {\n    deletePost(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation NewPost($title: String!, $content: String!, $file: Upload) {\n    newPost(title: $title, content: $content, file: $file) {\n      ...PostFragment\n    }\n  }\n"
): (typeof documents)["\n  mutation NewPost($title: String!, $content: String!, $file: Upload) {\n    newPost(title: $title, content: $content, file: $file) {\n      ...PostFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation EditPost($id: ID!, $title: String, $content: String, $file: Upload) {\n    updatePost(id: $id, title: $title, content: $content, file: $file) {\n      id\n      content\n      title\n      updatedAt\n      media\n    }\n  }\n"
): (typeof documents)["\n  mutation EditPost($id: ID!, $title: String, $content: String, $file: Upload) {\n    updatePost(id: $id, title: $title, content: $content, file: $file) {\n      id\n      content\n      title\n      updatedAt\n      media\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query IsLoggedIn @client {\n    isLoggedIn\n  }\n"
): (typeof documents)["\n  query IsLoggedIn @client {\n    isLoggedIn\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetMe {\n    getMe {\n      id\n      username\n    }\n  }\n"
): (typeof documents)["\n  query GetMe {\n    getMe {\n      id\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment PostFragment on Post {\n    id\n    title\n    content\n    author {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    media\n  }\n"
): (typeof documents)["\n  fragment PostFragment on Post {\n    id\n    title\n    content\n    author {\n      id\n      username\n    }\n    createdAt\n    updatedAt\n    media\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPosts($cursor: Int) {\n    getPosts(cursor: $cursor) {\n      posts {\n        ...PostFragment\n      }\n      totalPosts\n    }\n  }\n"
): (typeof documents)["\n  query GetPosts($cursor: Int) {\n    getPosts(cursor: $cursor) {\n      posts {\n        ...PostFragment\n      }\n      totalPosts\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPost($id: ID!) {\n    getPost(id: $id) {\n      ...PostFragment\n    }\n  }\n"
): (typeof documents)["\n  query GetPost($id: ID!) {\n    getPost(id: $id) {\n      ...PostFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetMyPost {\n    getMe {\n      id\n      posts {\n        ...PostFragment\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetMyPost {\n    getMe {\n      id\n      posts {\n        ...PostFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
