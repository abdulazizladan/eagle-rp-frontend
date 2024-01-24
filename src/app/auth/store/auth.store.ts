import { computed } from '@angular/core';
import { signalStore, withState, patchState, withComputed, withMethods, withHooks } from "@ngrx/signals";

export type AuthState = {
  token: string;
  isLoading: boolean
}

export const initialState: AuthState = {
  token: "",
  isLoading: false
}

export const AuthStore = signalStore(
  withState(initialState),
  withComputed(() => ({})),
  withMethods(() => ({
    login(){
      isLoading: true;
      setTimeout(() => {
        5000
      })
    }

  })),
  withHooks({
    onInit() {

    },
    onDestroy() {

    }
  })
)
