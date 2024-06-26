import { useGetUsers, useCreateUser, useUpdateUser, useGetUserById, useSignInUser, useSignOutUser } from "./user-actions";
import { useGetClubs, useGetClubByUniversityId, useCreateClub, useGetClubById, useUpdateClub } from "./club-actions";
import { useGetEvents, useGetEventById, useCreateEvent, useUpdateEvent } from "./event-actions";
import { useGetUniversities, useCreateUniversity } from "./university-actions";

export const getObjectActions = {
    useGetUsers,
    useGetUserById,
    useCreateUser,
    useUpdateUser,
    useSignInUser,
    useSignOutUser,
    useGetClubs,
    useGetClubById,
    useGetClubByUniversityId,
    useCreateClub,
    useUpdateClub,
    useGetEvents,
    useGetEventById,
    useCreateEvent,
    useUpdateEvent,
    useGetUniversities,
    useCreateUniversity,
}