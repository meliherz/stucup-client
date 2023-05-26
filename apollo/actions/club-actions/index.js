import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_CLUBS, CREATE_CLUB, GET_CLUBS_BY_UNIVERSITY, GET_CLUB_BY_ID } from "../../queries/club-queries";

export const useGetClubs = () => useLazyQuery(GET_CLUBS);

export const useGetClubByUniversityId = () => useLazyQuery(GET_CLUBS_BY_UNIVERSITY);

export const useCreateClub = () => useMutation(CREATE_CLUB);

export const useGetClubById = () => useLazyQuery(GET_CLUB_BY_ID);
