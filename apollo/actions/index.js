import { useGetUsers, useCreateUser } from "./user-actions";
import { useGetClubs, useGetClubByUniversityId, useCreateClub } from "./club-actions";
import { useGetEvents, useCreateEvent } from "./event-actions";
import { useGetUniversities, useCreateUniversity } from "./university-actions";

export const getObjectActions = {
    useGetUsers,
    useCreateUser,
    useGetClubs,
    useGetClubByUniversityId,
    useCreateClub,
    useGetEvents,
    useCreateEvent,
    useGetUniversities,
    useCreateUniversity,
}