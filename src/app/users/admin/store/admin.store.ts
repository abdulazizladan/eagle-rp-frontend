import { computed } from '@angular/core';
import { signalStore, withComputed, withState, withHooks, withMethods } from '@ngrx/signals';

export class AdminState {
  "email": string;
  "isLoading": boolean;
  "institution": {
    "name": string;
    "logo": string;
    "address": {
      "street": string;
      "lga": string;
      "state": string;
      "country": string
    }
  }
}

export const initialState: AdminState = {
  email: "",
  isLoading: false,
  institution: {
    name: "Albatross Nig LTD",
    logo: "./assets/img/logo.svg",
    address: {
      street: "Number 12 - 15. Child Avenue",
      lga: "Apapa",
      state: "Lagos",
      country: "Nigeria"
    }
  }
}

export const AdminStore = signalStore(
  withState(initialState),
  withComputed((state) => ({
    fullAddress: computed(() => `${state.institution.address.street()}, ${state.institution.address.lga()}, ${state.institution.address.state()}.`)
  })),
  withMethods(() => ({
    load() {

    }
  }))
)
