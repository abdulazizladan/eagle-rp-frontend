import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { SalesStore } from '../../store/sales.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-sales-record',
  templateUrl: './sales-record.component.html',
  styleUrl: './sales-record.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesRecordComponent {

  store = inject(SalesStore);

  constructor() {
    effect(() => {
      const store = getState(this.store);
      console.log('sales state has been updated', store);
    })
  }

}
