import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users($first: Int, $after: String, $before: String, $skip: Int, $search: String) {
    users(first: $first, after: $after, before: $before, skip: $skip, search: $search) {
      edges {
        node {
          id
          username
          password
          firstname
          lastname
          email
        }
      }
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