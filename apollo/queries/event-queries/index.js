import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
query Query {
  events {
    id
    location
    eventname
    eventTime
    eventImage
    eventDate
    description
    category
    capacity
    organizer
    participants
  }
}
`;

export const GET_EVENT_BY_ID = gql`
query Query($eventId: ID!) {
  event(id: $eventId) {
    ... on Event {
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