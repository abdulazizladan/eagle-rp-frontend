import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { login, loginFailure, loginSuccess } from "./auth.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { LoginCredentials } from "../models/loginCredential.model";
import { AuthState } from "./auth.reducer";
import { Status } from "../enums/status.enum";
@Injectable()
export class AuthEffects{

  private readonly authService = inject(AuthService);
  private actions$ = inject(Actions)
  constructor(
  ) {

  }
  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    exhaustMap(() => this.authService.login({email: 'a@b.c', password: 'abcd'}).pipe(
      map(
        user => loginSuccess(
          {
            user: {
              status: Status.success,
              token: 'aaa'
            }
          }
          )
        ),
      catchError((error) => of(loginFailure(error)))
    ))
  ))
}
