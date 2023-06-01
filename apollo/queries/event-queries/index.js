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
mutation Mutation($input: CreateEventInput!) {
  eventCreate(input: $input) {
    id
    eventname
    description
    eventDate
    eventTime
    location
    organizer
    category
    capacity
    eventImage
  }
}
`;


export const UPDATE_EVENT = gql`
mutation Mutation($input: UpdateEventInput!) {
    eventUpdate(input: $input) {
      id
      participants 
    }
}
`;