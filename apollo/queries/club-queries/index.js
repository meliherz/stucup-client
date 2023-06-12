import { gql } from "@apollo/client";

export const GET_CLUBS = gql`
query Clubs {
  clubs {
    id
    clubname
    clubImage
    admin {
      id
      username
    }
    description
    email
    events {
      id
      eventname
      eventTime
      eventImage
      eventDate
      description
      category
      capacity
      location
      organizer
      participants
    }
    rate
    university {
      id
      universityName
    }
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

export const UPDATE_CLUB = gql`
mutation Mutation($input: UpdateClubInput!) {
  clubUpdate(input: $input) {
    id
    events {
      id
    }
  }
}
`;