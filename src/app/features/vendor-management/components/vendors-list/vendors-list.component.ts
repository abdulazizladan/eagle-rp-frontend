import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { VendorStore } from '../../store/vendor.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrl: './vendors-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorsListComponent {

  store = inject(VendorStore)

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('vendors state has changed', state)
    })
  }

}
