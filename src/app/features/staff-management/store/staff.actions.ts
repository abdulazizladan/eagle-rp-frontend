import { createAction, props } from "@ngrx/store";
import { Staff } from "../models/staff.model";

export const loadStaff = createAction('[STAFF] Load Staff');
export const loadStaffSuccess = createAction('[STAFF] Load Staff Success', props<{staff: Staff[]}>());
export const loadStaffFailure = createAction('[STAFF] Load Staff Failure', props<{error: string}>());
export const createStaff = createAction('[STAFF] Create Staff', props<{staff: Staff}>());
export const createStaffSuccess = createAction('[STAFF] Create Staff Success', props<{staff: Staff}>());
export const createStaffFailure = createAction('[STAFF] Create Staff Failure', props<{error: string}>());
export const updateStaff = createAction('[STAFF] Update Staff', props<{id: string, staff: Staff}>());
export const updateStaffSuccess = createAction('[STAFF] Update Staff Success', props<{staff: Staff}>());
export const updateStaffFailure = createAction('[STAFF] Update Staff Failure', props<{error: string}>());
