import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
          id
          username
          password
          firstname
          lastname
          email
    }
  }
`;

export const GET_USER_BY_ID = gql`
query Query($userId: ID!) {
  user(id: $userId) {
    ... on User {
      id
      followsclub
      username
      firstname
      lastname
      email
    }
  }
}
`;

//Düzenle
export const CREATE_USER = gql`
mutation Mutation($input: CreateUserInput!) {
  userCreate(input: $input) {
    id
    username
    lastname
    password
    firstname
    email
  }
}
`;

export const UPDATE_USER = gql`
mutation Mutation($input: UpdateUserInput!) {
  userUpdate(input: $input) {
    id
    lastname
    password
    role
    username
    followsclub
    firstname
    email
  }
}
`;

export const SIGN_IN_USER = gql`
mutation Mutation($data: SignInUserInput!) {
  signIn(data: $data) {
    ... on Token {
      userId
      token
    }
  }
}`;

export const IS_ME = gql`
query Isme {
  isme {
    isMe
    user {
      id
      username
    }
  }
}
`;

export const SIGN_OUT = gql`
    mutation SignOutUser{
      signOutUser
    }   
`;