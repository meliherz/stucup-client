import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users($first: Int, $after: String, $before: String, $skip: Int, $search: String) {
    users(first: $first, after: $after, before: $before, skip: $skip, search: $search) {
      edges {
        node {
          id
          username
          displayName
          firstname
          lastname
          profileImage
          userRole {
        id
        slug
        title
      }


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