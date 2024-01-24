import { signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals"
import { Vendor } from "../models/vendor.model"
import { computed, inject } from "@angular/core"
import { VendorsService } from "../services/vendors.service"

export type VendorState = {
  vendors: Array<Vendor>,
  isLoading: boolean
}

export const initialState: VendorState = {
  vendors: [],
  isLoading: false
}

export const VendorStore = signalStore(
  withState(initialState),
  withComputed((state) => ({
    vendorsCount: computed(() => state.vendors().length)
  })),
  withMethods((state, vendorService = inject(VendorsService)) => ({})),
  withHooks(({
    onInit() {

    },
    onDestroy() {

    }
  }))
)
