import { createReducer } from "@ngrx/store";
import { Building } from "../models/building.model";
import { Site } from "../models/site.model";
import { Summary } from "../models/summary.model";

export const featureKey = "assets";

export class AssetsState {
  "summary": Summary;
  "sites": Site[];
  "buildings": Building[];
  "status": "idle" | "loading" | "success" | "error";
}

export const initialState: AssetsState = {
  summary: {
    sitesCount: 0,
    buildingsCount: 0,
    furnitureCount: 0,
    machineryCount: 0,
    vehiclesCount: 0,
    toolsCount: 0
  },
  sites: [],
  buildings: [],
  status: "idle"
}

export const assetsReducer = createReducer(
  initialState
)
