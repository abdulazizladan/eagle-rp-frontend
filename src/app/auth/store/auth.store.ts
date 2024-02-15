import { computed, inject } from '@angular/core';
import { signalStore, withState, patchState, withComputed, withMethods, withHooks } from "@ngrx/signals";
import { AuthService } from '../services/auth.service';

export type AuthState = {
  token: string;
  isAuthenticated: boolean;
  isLoading: boolean
}

export const initialState: AuthState = {
  token: "",
  isAuthenticated: false,
  isLoading: false
}

export const AuthStore = signalStore(
  withState(initialState),
  withComputed(() => ({})),
  withMethods((state, authService = inject(AuthService)) => ({
    login(){
      isLoading: true;
      setTimeout(() => {
        5000
      })
    },
    authenticate() {
      patchState(state, {

      })
    }
  })),
  withHooks({
    onInit({authenticate}) {
      authenticate(),
      console.log("Authenticating")
    },
    onDestroy() {
      console.log("closing auth");
    }
  })
)
