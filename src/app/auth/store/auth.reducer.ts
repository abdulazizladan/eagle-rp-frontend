import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess } from "./auth.actions";

export const featureKey = "auth";

export class AuthState{
  "token": string;
  "status"!: "idle" | "loading" | "success" | "error";
}

const initialState: AuthState = {
  token: '',
  status: "idle"
}

export const AuthReducer = createReducer(
  initialState,
  on(login, (state => ({...state, status: "loading"}))),
  on(loginSuccess, (state => ({...state, status: "success", token: 'blah.blah.blah'}))),
  on(loginFailure, (state => ({...state, status: "error"})))
)
