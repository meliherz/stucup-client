import { gql } from "@apollo/client";

export const GET_CLUBS = gql`
query Clubs($first: Int, $after: String, $before: String, $skip: Int, $search: String) {
  clubs(first: $first, after: $after, before: $before, skip: $skip, search: $search) {
    edges {
      node {
        id
        clubname
        university
        description
        admin
        email
        members
        events
        clubImage
      }
    }
  }
}

`;

export const CREATE_CLUB = gql`
mutation ClubCreate($input: CreateClubInput!) {
  clubCreate(input: $input) {
    id
    clubname
    university
    description
    admin
    email
    clubImage
  }
}
`;