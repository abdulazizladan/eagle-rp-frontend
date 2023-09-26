import { createReducer } from "@ngrx/store";
import { Organization } from "../models/organization.model";
import { DashboardData } from "../models/dashboard-data.model";

export const featureKey = "admin";

export class AdminState{
  organization!: Organization;
  dashboardData!: DashboardData;
  status!: "idle" | "loading" | "success" | "error";
}

export const initialState: AdminState = {
  organization: {name: "ABC Nig LTD", website: "https://abc.xyz", logo: ""},
  dashboardData: { documents: 0, projects: 0, sales: 0, assets: 0, staff: 0, users: 0},
  status: "idle"
}

export const AdminReducer = createReducer(
  initialState
)
