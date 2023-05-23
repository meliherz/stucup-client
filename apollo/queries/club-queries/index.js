import { gql } from "@apollo/client";

export const GET_CLUBS = gql`
query Clubs {
  clubs {
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