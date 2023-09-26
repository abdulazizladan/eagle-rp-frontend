import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../services/user.service";
import { createUser, createUserSuccess, loadUsers, loadUsersFailure, loadUsersSuccess, updateUser } from "./user-management.actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class UserEffects{

  private actions$ = inject(Actions);
  private usersService = inject(UserService);

  constructor() {

  };


  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      exhaustMap(() => this.usersService.getAll().pipe(
        map(users => loadUsersSuccess({users})),
        catchError((error) => of(loadUsersFailure(error)))
      ))
    )
  );

  /**
  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      exhaustMap(() => this.usersService.create({user: User}).pipe(
        map(user => createUserSuccess({user})),
        catchError((error) => of(loadUsersFailure(error)))
      ))
    )
  )

  updateUser$ = createEffect(() =>
      this.actions$.pipe(
        ofType(updateUser)
      )
  )**/
}
