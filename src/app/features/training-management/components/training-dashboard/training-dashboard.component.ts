import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { TrainingStore } from '../../store/training.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-training-dashboard',
  templateUrl: './training-dashboard.component.html',
  styleUrl: './training-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingDashboardComponent {

  store = inject(TrainingStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('training state has changed', state)
    })
  }
}
