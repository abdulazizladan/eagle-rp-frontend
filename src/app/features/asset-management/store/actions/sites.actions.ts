import { createAction, props } from "@ngrx/store";
import { Site } from "../../models/site.model";

export const loadSites = createAction("[SITES] Load Sites");
export const loadSitesSuccess = createAction("[SITES] Load Sites Success", props<{sites: Site[]}>);
export const loadSitesFailure = createAction("[SITES] Load Sites Failure", props<{error: string}>);

export const createSite = createAction("[SITES] Create Site");
export const createSiteSuccess = createAction("[SITES] Create Site Success", props<{site: Site}>);
export const createSitesFailure = createAction("[SITES] Create Site Failure", props<{error: string}>)
