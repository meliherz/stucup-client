import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users($first: Int, $after: String, $before: String, $skip: Int, $search: String) {
    users(first: $first, after: $after, before: $before, skip: $skip, search: $search) {
      edges {
        node {
          id
          username
          password
          email
          firstname
          lastname
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
        totalCount
      }
    }
  }

`;