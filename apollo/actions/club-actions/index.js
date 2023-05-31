import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_CLUBS, CREATE_CLUB, GET_CLUBS_BY_UNIVERSITY, GET_CLUB_BY_ID, UPDATE_CLUB } from "../../queries/club-queries";
import { use } from "react";

export const useGetClubs = () => useLazyQuery(GET_CLUBS);

export const useGetClubByUniversityId = () => useLazyQuery(GET_CLUBS_BY_UNIVERSITY);

export const useCreateClub = () => useMutation(CREATE_CLUB);

export const useGetClubById = () => useLazyQuery(GET_CLUB_BY_ID);

export const useUpdateClub = () => useMutation(UPDATE_CLUB);
