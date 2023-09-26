import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class StaffEffects{

  constructor(
    private actions$: Actions
  ) {

  }

  loadStaff$() {
    this.actions$.pipe(

    )
  }

}
