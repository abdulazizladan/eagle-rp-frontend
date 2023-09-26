import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";

export const loadUsers = createAction('[USERS] Load Users');
export const loadUsersSuccess = createAction('[USERS] Load Users Success', props<{users: User[]}>());
export const loadUsersFailure = createAction('[USERS] Load Users Failure', props<{error: string}>());
export const createUser = createAction('[USERS] Create User', props<{user: User}>());
export const createUserSuccess = createAction('[USERS] Create User Success', props<{user: User}>());
export const createUserFailure = createAction('[USERS] Create User Failure', props<{error: string}>());
export const updateUser = createAction('[USERS] Update User', props<{id: string, user: User}>());
export const updateUserSuccess = createAction('[USERS] Update User Success', props<{id: string, user: User}>());
export const updateUserFailure = createAction('[USERS] Update User Failure', props<{error: string}>());
