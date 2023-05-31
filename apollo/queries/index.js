import { GET_USERS, GET_USER_BY_ID, CREATE_USER, UPDATE_USER, SIGN_IN_USER, IS_ME } from "./user-queries";
import { GET_CLUBS, CREATE_CLUB, GET_CLUBS_BY_UNIVERSITY, GET_CLUB_BY_ID, UPDATE_CLUB } from "./club-queries";
import { GET_EVENTS, GET_EVENT_BY_ID, CREATE_EVENT } from "./event-queries";
import { GET_UNIVERSITIES, CREATE_UNIVERSITY  } from "./university-queries";


export const listQueries = {
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  UPDATE_USER,
  SIGN_IN_USER,
  IS_ME,
  GET_CLUBS,
  GET_CLUB_BY_ID,
  GET_CLUBS_BY_UNIVERSITY,
  CREATE_CLUB,
  UPDATE_CLUB,
  GET_EVENTS,
  GET_EVENT_BY_ID,
  CREATE_EVENT,
  GET_UNIVERSITIES,
  CREATE_UNIVERSITY,
};
