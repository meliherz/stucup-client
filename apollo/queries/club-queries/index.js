import { gql } from "@apollo/client";

export const GET_CLUBS = gql`
query Clubs {
  clubs {
        id
        clubname
        university {
          id
          universityName
        }
        description
        admin
        email
        members
        events
        clubImage
  }
}

`;

export const GET_CLUBS_BY_UNIVERSITY = gql`
query ClubToUniversity($clubToUniversityId: ID!) {
  clubToUniversity(id: $clubToUniversityId) {
    id
    clubname
    description
    university {
      id
      universityName
    }
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