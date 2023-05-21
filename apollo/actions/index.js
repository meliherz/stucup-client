import { useGetUsers, useCreateUser } from "./user-actions";
import { useGetClubs, useCreateClub } from "./club-actions";
import { useGetEvents, useCreateEvent } from "./event-actions";

export const getObjectActions = {
    useGetUsers,
    useCreateUser,
    useGetClubs,
    useCreateClub,
    useGetEvents,
    useCreateEvent,
}