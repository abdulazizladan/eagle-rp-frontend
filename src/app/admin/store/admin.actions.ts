import { createAction, props } from "@ngrx/store";

export {}
export const loadDashboardData = createAction('[ADMIN] Load Dashboard Data');
export const loadDashboardDataSuccess = createAction('[ADMIN] Load Dashboard Data Success');
export const loadDashboardDataFailure = createAction('[ADMIN] Load Dashboard Data Failure', props<{error: string}>())
