import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user.model";
import { createUser, createUserFailure, createUserSuccess, loadUsers, loadUsersFailure, loadUsersSuccess } from "./user-management.actions";
import { Status } from "../enums/status.enum";

export const featureKey = 'users';

export class UserState{
  users!: User[];
  status!: Status;
}

export const initialState: UserState = {
  users: [],
  status: Status.idle
}

export const UserReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({...state, status: Status.loading})),
  on(loadUsersSuccess, (state, {users}) => ({...state, users: users, status: Status.success})),
  on(loadUsersFailure, (state, {error}) => ({...state, error: error, status: Status.error})),
  on(createUser, (state, {user}) => ({...state, users: [...state.users, user]})),
  on(createUserSuccess, (state, {user}) => ({...state, user: user, status: Status.success})),
  on(createUserFailure, (state, {error}) => ({...state, error: error, status: Status.error}))
)
