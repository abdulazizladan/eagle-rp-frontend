import { createReducer } from "@ngrx/store";
import { Sale } from "../models/sale.model";

export const featureKey = "sales";

export class SalesState {
  "sales": Sale[];
  "status": "idle" | "loading" | "success" | "error";
}

export const initialState: SalesState = {
  "sales": [],
  "status": "idle"
}

export const SalesReducer = createReducer(
  initialState
)
