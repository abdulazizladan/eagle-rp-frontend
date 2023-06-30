import { createReducer } from "@ngrx/store";
import { Organization } from "../models/organization.model";

export const featureKey = "admin";

export class AdminState{
  "organization": Organization | null;
  "status": "idle" | "loading" | "success" | "error";
}

export const initialState: AdminState = {
  organization: {name: "ABC Nig LTD", website: "https://abc.xyz"},
  status: "idle"
}

export const AdminReducer = createReducer(
  initialState
)
