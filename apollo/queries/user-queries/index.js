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
query Users($objectId: ID!) {
  user(id: $objectId) {
    ... on User {
      id
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
  mutation UserCreate($input: CreateUserInput!) {
    userCreate(input: $input) {
      id
      username
    }
  }
`;