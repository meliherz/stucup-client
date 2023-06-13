import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_USERS, GET_USER_BY_ID, CREATE_USER, UPDATE_USER, SIGN_IN_USER, SIGN_OUT } from "../../queries/user-queries";

export const useGetUsers = () => useLazyQuery(GET_USERS);

export const useGetUserById = () => useLazyQuery(GET_USER_BY_ID);

export const useCreateUser = () => useMutation(CREATE_USER);

export const useUpdateUser = () => useMutation(UPDATE_USER);

export const useSignInUser = () => useMutation(SIGN_IN_USER);

export const useSignOutUser = () => useMutation(SIGN_OUT);