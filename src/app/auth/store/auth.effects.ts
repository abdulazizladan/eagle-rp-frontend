import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { login, loginFailure, loginSuccess } from "./auth.actions";
import { catchError, exhaustMap, map } from "rxjs";
import { LoginCredentials } from "../models/loginCredential.model";
import { AuthState } from "./auth.reducer";
@Injectable()
export class AuthEffects{

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {

  }

  /*login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    exhaustMap(() => this.authService.login({}).pipe(
      map(user => loginSuccess({user: AuthState})),
      catchError(() => of({type: '[]'}))
    ))
  ))*/
}
