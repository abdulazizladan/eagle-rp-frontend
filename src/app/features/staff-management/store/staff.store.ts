import { signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Staff } from "../models/staff.model";
import { computed, inject } from "@angular/core";
import { StaffService } from "../services/staff.service";

type StaffState = {
  "staff": Staff[];
  "isLoading": boolean
}

export const initialState: StaffState = {
  staff: [],
  isLoading: false
}

export const StaffStore = signalStore(
  withState(initialState),
  withComputed((state) => ({
    staffCount: computed(() => state.staff().length)
  })),
  withMethods((state, staffService = inject(StaffService)) => ({
    loadAll() {

    },
    add() {

    },
    update() {

    },
    delete() {

    }
  })
  )
)
