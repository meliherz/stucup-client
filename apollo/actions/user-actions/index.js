import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_USERS } from "../../queries/user-queries";

export const useGetUsers = () => useLazyQuery(GET_USERS);