import { useGetUsers, useCreateUser } from "./user-actions";
import { useGetClubs, useGetClubByUniversityId, useCreateClub, useGetClubById, useUpdateClub } from "./club-actions";
import { useGetEvents, useGetEventById, useCreateEvent } from "./event-actions";
import { useGetUniversities, useCreateUniversity } from "./university-actions";

export const getObjectActions = {
    useGetUsers,
    useCreateUser,
    useGetClubs,
    useGetClubById,
    useGetClubByUniversityId,
    useCreateClub,
    useUpdateClub,
    useGetEvents,
    useGetEventById,
    useCreateEvent,
    useGetUniversities,
    useCreateUniversity,
}