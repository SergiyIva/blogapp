import { graphql } from "../gql";

export const SIGNUP_USER = graphql(`
  mutation SignUp($username: String!, $password: String!) {
    signUp(username: $username, password: $password)
  }
`);

export const SIGNIN_USER = graphql(`
  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password)
  }
`);

export const DELETE_POST = graphql(`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`);

export const NEW_POST = graphql(`
  mutation NewPost($title: String!, $content: String!, $file: Upload) {
    newPost(title: $title, content: $content, file: $file) {
      ...PostFragment
    }
  }
`);

export const EDIT_POST = graphql(`
  mutation EditPost($id: ID!, $title: String, $content: String, $file: Upload) {
    updatePost(id: $id, title: $title, content: $content, file: $file) {
      id
      content
      title
      updatedAt
      media
    }
  }
`);
