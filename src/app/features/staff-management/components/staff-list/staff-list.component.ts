import { Component, inject, effect, ChangeDetectionStrategy } from '@angular/core';
import { StaffStore } from '../../store/staff.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffListComponent {

  displayedColumns: Array<string> = ["id", "firstName", "middleName", "lastName", "actions"];

  store = inject(StaffStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('Staff state has changed', state);
    })
  }

}
