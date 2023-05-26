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
        events {
          id
          eventname
        }
        clubImage
  }
}
`;

export const GET_CLUB_BY_ID = gql`
query Query($clubId: ID!) {
  club(id: $clubId) {
    ... on Club {
      id
      description
      clubname
      clubImage
      email
      university {
        id
        universityName
      }
      events {
        id
        eventname
        eventImage
        eventDate
        description
        location
      }
    }
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