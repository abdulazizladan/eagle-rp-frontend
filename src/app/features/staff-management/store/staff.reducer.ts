import { createReducer, on } from "@ngrx/store";
import { Staff } from "../models/staff.model";
import { createStaff, loadStaff } from "./staff.actions";
import { Status } from "../enums/status.enum";

export const featureKey = "registry"

export class StaffState{
  staff!: Staff[];
  status!: Status;
}

export const initialState: StaffState = {
  staff: [
    {
      id: "1234",
      firstName: "Onye",
      middleName: "Freedom",
      lastName: "Chigozili",
      employment: {
        dateOfEmployment: new Date(1825334835)
      },
      biodata: {
        gender: "m",
        dateOfBirth: new Date(12980045283)
      }
    },
    {
      id: "8570",
      firstName: "Samira",
      middleName: "Aliyu",
      lastName: "Tasiu",
      employment: {
        dateOfEmployment: new Date(1825334835)
      },
      biodata: {
        gender: "f",
        dateOfBirth: new Date(12980045283)
      }
    }
  ],
  status: Status.idle
}

export const StaffReducer = createReducer(
  initialState,
  on(loadStaff, (state) => ({...state, status: Status.loading})),
  on(createStaff, (state, {staff}) => ({...state, staff: [...state.staff, staff]}))
)
