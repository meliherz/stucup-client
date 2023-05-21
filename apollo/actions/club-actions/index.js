import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_CLUBS, CREATE_CLUB } from "../../queries/club-queries";

export const useGetClubs = () => useLazyQuery(GET_CLUBS);
export const useCreateClub = () => useMutation(CREATE_CLUB);