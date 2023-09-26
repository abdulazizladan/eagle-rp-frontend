import { createAction } from "@ngrx/store"

export const loadAssets = createAction("[ASSETS] Load Assetes");
export const loadAssetsSuccess = createAction("[ASSETS] Load Assets Success");
export const loadAssetsFailure = createAction("ASSETS] Load Assets Failure")
