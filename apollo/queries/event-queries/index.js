import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query Events {
    events {
        id
        eventname
        clubId
        description
        organizer
        eventDate
        location
        participants
        eventImage
  }
}

`;

export const CREATE_EVENT = gql`
mutation EventCreate($input: CreateEventInput!) {
  eventCreate(input: $input) {
    id
    eventname
    clubId
    description
    organizer
    eventDate
    location
    eventImage
  }
}
`;