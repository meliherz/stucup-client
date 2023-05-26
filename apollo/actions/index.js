import { useGetUsers, useCreateUser } from "./user-actions";
import { useGetClubs, useGetClubByUniversityId, useCreateClub, useGetClubById } from "./club-actions";
import { useGetEvents, useCreateEvent } from "./event-actions";
import { useGetUniversities, useCreateUniversity } from "./university-actions";

export const getObjectActions = {
    useGetUsers,
    useCreateUser,
    useGetClubs,
    useGetClubById,
    useGetClubByUniversityId,
    useCreateClub,
    useGetEvents,
    useCreateEvent,
    useGetUniversities,
    useCreateUniversity,
}