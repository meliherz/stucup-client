import { gql } from "@apollo/client";

export const GET_UNIVERSITIES = gql`
  query Universities {
    universities {
          id
          universityName
          slug
    }
  }
`;

export const CREATE_UNIVERSITY = gql`
mutation Mutation($input: CreateUniversityInput!) {
    universityCreate(input: $input) {
      id
      slug
      universityName
    }
  }
`;