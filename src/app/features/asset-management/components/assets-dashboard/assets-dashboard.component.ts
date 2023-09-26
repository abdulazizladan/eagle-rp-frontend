import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AssetsState } from '../../store/assets.reducer';
import { loadAssets } from '../../store/actions/assets.actions';

@Component({
  selector: 'app-assets-dashboar',
  templateUrl: './assets-dashboard.component.html',
  styleUrls: ['./assets-dashboard.component.scss']
})
export class AssetsDashboardComponent implements OnInit {

  private store = inject(Store<{assets: AssetsState}>)

  ngOnInit(): void {
  this.store.dispatch(loadAssets())
  }

}
