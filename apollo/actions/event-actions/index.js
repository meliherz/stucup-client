import { useQuery, useMutation, useLazyQuery, from } from "@apollo/client";
import { GET_EVENTS, CREATE_EVENT} from "../graphql/queries";

export const useGetEvents = () => useLazyQuery(GET_EVENTS);
export const useCreateEvent = () => useMutation(CREATE_EVENT);