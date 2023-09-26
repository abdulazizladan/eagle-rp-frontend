import { createAction, props } from "@ngrx/store";
import { Project } from "../../models/project.model";

export const LoadProjects = createAction('[PROJECTS] Load Projects');
export const LoadProjectsSuccess = createAction('[PROJECTS] Load Projects Success', props<{projects: Project[]}>);
export const LoadProjectsFailure = createAction('[PROJECTS] Load Projects Failure', props<{error: string}>);
export const createProject = createAction('[PROJECTS] Create project');
export const createProjectSuccess = createAction('[PROJECT] Create Project Success', props<{project: Project}>);
export const createProjectFailure = createAction('[PROJECT] Create Project Failure', props<{error: string}>);
