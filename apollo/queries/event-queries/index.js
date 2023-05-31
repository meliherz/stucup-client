import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
query Event {
  events {
    organizer
    id
    location
    eventname
    eventImage
    eventTime
    eventDate
    description
    category
    capacity
  }
}
`;

export const GET_EVENT_BY_ID = gql`
query Event($eventId: ID!) {
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