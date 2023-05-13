import { graphql } from "../gql/gql";

export type IsLoggedIn = {
  isLoggedIn: boolean;
};
export const IS_LOGGED_IN = graphql(`
  query IsLoggedIn @client {
    isLoggedIn
  }
`);

export const GET_ME = graphql(`
  query GetMe {
    getMe {
      id
      username
    }
  }
`);

export const PostFragment = graphql(`
  fragment PostFragment on Post {
    id
    title
    content
    author {
      id
      username
    }
    createdAt
    updatedAt
    media
  }
`);
export const GET_POSTS = graphql(`
  query GetPosts($cursor: Int) {
    getPosts(cursor: $cursor) {
      posts {
        ...PostFragment
      }
      totalPosts
    }
  }
`);

export const GET_POST = graphql(`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      ...PostFragment
    }
  }
`);

export const GET_MY_POSTS = graphql(`
  query GetMyPost {
    getMe {
      id
      posts {
        ...PostFragment
      }
    }
  }
`);
