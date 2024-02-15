import { ChangeDetectionStrategy, Component, effect, inject, OnInit } from '@angular/core';
import { assetsStore } from '../../store/assets.store';
import { getState } from '@ngrx/signals';
import { AssetsService } from '../../services/assets.service';

@Component({
  selector: 'app-assets-dashboard',
  templateUrl: './assets-dashboard.component.html',
  styleUrl: './assets-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetsDashboardComponent implements OnInit {

  store = inject(assetsStore);
  assetService = inject(AssetsService);

  constructor() {
    effect(() => {
      const state = getState(this.store)
      console.log('assets state has changed', state)
    })
  }

  ngOnInit() {
  }

}
