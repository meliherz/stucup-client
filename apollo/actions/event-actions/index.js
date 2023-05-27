import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_EVENTS, CREATE_EVENT, GET_EVENT_BY_ID} from "../../queries/event-queries";

export const useGetEvents = () => useLazyQuery(GET_EVENTS);
export const useGetEventById = () => useLazyQuery(GET_EVENT_BY_ID);
export const useCreateEvent = () => useMutation(CREATE_EVENT);