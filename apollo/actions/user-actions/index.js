import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_USERS, CREATE_USER, UPDATE_USER } from "../../queries/user-queries";

export const useGetUsers = () => useLazyQuery(GET_USERS);

export const useCreateUser = () => useMutation(CREATE_USER);

export const useUpdateUser = () => useMutation(UPDATE_USER);