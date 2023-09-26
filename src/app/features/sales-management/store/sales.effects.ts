import { Injectable, inject } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class SalesEffect {

  private actions = inject(Actions)
  constructor() {

  }
}
