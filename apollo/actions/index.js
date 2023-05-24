import { useGetUsers, useCreateUser } from "./user-actions";
import { useGetClubs, useCreateClub } from "./club-actions";
import { useGetEvents, useCreateEvent } from "./event-actions";
import { useGetUniversities, useCreateUniversity } from "./university-actions";

export const getObjectActions = {
    useGetUsers,
    useCreateUser,
    useGetClubs,
    useCreateClub,
    useGetEvents,
    useCreateEvent,
    useGetUniversities,
    useCreateUniversity,
}