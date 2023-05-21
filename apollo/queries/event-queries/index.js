import { gql } from "@apollo/client";

const GET_EVENTS = gql`
query Events($first: Int, $after: String, $before: String, $skip: Int, $search: String) {
  events(first: $first, after: $after, before: $before, skip: $skip, search: $search) {
    edges {
      node {
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
  }
}

`;

const CREATE_EVENT = gql`
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