import { signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Training } from "../models/training.model";
import { inject } from "@angular/core";
import { TrainingService } from "../services/training.service";

export type trainingState = {
  training: Array<Training>,
  isLoading: boolean
}

export const initialState: trainingState = {
  training: [],
  isLoading: false
}

export const TrainingStore = signalStore(
  withState(initialState),
  withComputed(() => ({})),
  withMethods((state, traiingService = inject(TrainingService)) => ({
    loadAll() {

    },
    add() {

    },
    update() {

    },
    delete() {

    }
  }))
)
