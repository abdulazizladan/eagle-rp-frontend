import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Staff } from "../models/staff.model";
import { computed, inject } from "@angular/core";
import { StaffService } from "../services/staff.service";

type StaffState = {
  "staff": Staff[];
  "filter": string;
  "isLoading": boolean
}

export const initialState: StaffState = {
  staff: [],
  filter: "",
  isLoading: false
}

export const StaffStore = signalStore(
  withState(initialState),
  withComputed((state) => ({
    staffCount: computed(
      () => state.staff().length
    ),
    staffFiltered: computed(
      () => {
        const staff = state.staff();
        if(state.filter() != ""){
          return staff.filter(staff => staff.basicInfo.id === state.filter())
        }else {
          return staff
        }
      }
    )
  })),
  withMethods((state, staffService = inject(StaffService)) => ({
    async loadAll() {
      patchState(state, { staff: []});
      staffService.getAll().subscribe((staff) => {
        patchState(state, { staff });
      })
    },
    add(staff: Staff) {
      const newStaff = staff;
      patchState(state, {
        staff: [...state.staff(), newStaff],
        isLoading: false
      })
    },
    update() {

    },
    delete(id: string) {
      const staffId: string = id;
      patchState(state, {
        staff: state.staff().filter((x) => x.basicInfo.id != staffId),
        isLoading: false
      })
    }
  }
  )
  ),
  withHooks({
    onInit({loadAll}) {
      loadAll()
    },
    onDestroy() {

    }
  })
)
