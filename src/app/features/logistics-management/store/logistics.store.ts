import { signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Item } from "../models/item.model";
import { inject } from "@angular/core";
import { LogisticsService } from "../services/logistics.service";

type LogisticsState = {
  inventory: Array<Item>,
  isLoading: boolean
}

const initialState: LogisticsState = {
  inventory: [],
  isLoading: false
}

export const LogisticsStore = signalStore(
  withState(initialState),
  withComputed((state) => ({})),
  withMethods((state, logisticsService = inject(LogisticsService)) => ({

  })),
  withHooks({
    onInit() {

    },
    onDestroy() {

    }
  })
)
