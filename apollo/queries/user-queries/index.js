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
      lastname
      role
      username
      firstname
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
    role
    followsclub
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