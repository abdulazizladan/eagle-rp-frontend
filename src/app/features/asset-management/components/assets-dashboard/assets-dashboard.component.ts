import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { assetsStore } from '../../store/assets.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-assets-dashboard',
  templateUrl: './assets-dashboard.component.html',
  styleUrl: './assets-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetsDashboardComponent {

  store = inject(assetsStore);

  constructor() {
    effect(() => {
      const state = getState(this.store)
      console.log('assets state has changed', state)
    })
  }

}
