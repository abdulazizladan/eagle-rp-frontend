import { signalStore, withState, withComputed, withMethods, withHooks } from "@ngrx/signals";
import { InvoiceType } from "../models/invoice.model"
import { inject } from "@angular/core";
import { SalesService } from "../services/sales.service";

type SalesState = {
  invoices: Array<InvoiceType>;
  isLoading: boolean
}

export const initialState: SalesState = {
  invoices: [],
  isLoading: false
}

export const SalesStore = signalStore(
  withState(initialState),
  withComputed((store) => ({})),
  withMethods((store, salesService = inject(SalesService)) => ({

  }))
)
