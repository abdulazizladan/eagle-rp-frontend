import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess } from "./auth.actions";
import { Status } from "../enums/status.enum";

export const featureKey = "auth";

export class AuthState{
  "token": string;
  "status"!: Status
}

const initialState: AuthState = {
  token: '',
  status: Status.idle
}

export const AuthReducer = createReducer(
  initialState,
  on(login, (
    state => (
      {
        ...state,
        status: Status.loading
      }
    )
  )
  ),
  on(loginSuccess, (
    state => (
      {
        ...state,
        status: Status.success,
        token: 'blah.blah.blah'
      }))),
  on(loginFailure, (
    state => (
      {
        ...state,
        status: Status.error
      }))
  )
)
