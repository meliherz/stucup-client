import { gql } from "@apollo/client";

export const GET_CLUBS = gql`
query Clubs {
  clubs {
    id
    university {
      id
      universityName
    }
    description
    clubname
    clubImage
    rate
  }
}
`;

export const GET_CLUB_BY_ID = gql`
query Query($clubId: ID!) {
  club(id: $clubId) {
    ... on Club {
      id
      clubname
      description
      clubImage
      email
      university {
        id
        universityName
      }
      events {
        id
        eventname
        description
        eventDate
        eventTime
        eventImage
        category
        location
        capacity
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