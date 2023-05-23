import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { CREATE_UNIVERSITY, GET_UNIVERSITIES } from "../../queries/university-queries";

export const useGetUniversities = () => useLazyQuery(GET_UNIVERSITIES);

export const useCreateUniversity = () => useMutation(CREATE_UNIVERSITY);