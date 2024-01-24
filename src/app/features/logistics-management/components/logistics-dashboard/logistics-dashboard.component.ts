import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { LogisticsStore } from '../../store/logistics.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-logistics-dashboard',
  templateUrl: './logistics-dashboard.component.html',
  styleUrl: './logistics-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogisticsDashboardComponent {

  store = inject(LogisticsStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('logistics state has changed', state)
    })
  }

}
