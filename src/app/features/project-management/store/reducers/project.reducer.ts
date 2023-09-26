import { createReducer } from "@ngrx/store"

export class ProjectsState{
  "status": "idle" | "loading" | "success" | "error";
}

export const featureKey = "projects"

export const initialState: ProjectsState = {
  status: "idle"
}

export const ProjectsReducer = createReducer(initialState)
