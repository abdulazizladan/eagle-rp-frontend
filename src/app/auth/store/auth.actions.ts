import { createAction, props } from "@ngrx/store";
import { LoginCredentials } from "../models/loginCredential.model";
import { AuthState } from "./auth.reducer";

export const login = createAction('[Auth] LOGIN', props<{credentials: LoginCredentials}>());
export const loginSuccess = createAction('[Auth] LOGIN SUCCESS', props<{user: AuthState}>());
export const loginFailure = createAction('[Auth] LOGIN FAILURE', props<{error: string}>());
