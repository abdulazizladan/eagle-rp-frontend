import { Component, inject, effect, ChangeDetectionStrategy } from '@angular/core';
import { StaffStore } from '../../store/staff.store';
import { getState } from '@ngrx/signals';
import { MatDialog } from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffListComponent {

  displayedColumns: Array<string> = ["id", "firstName", "middleName", "lastName", "actions"];

  private dialog = inject(MatDialog);
  store = inject(StaffStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('Staff state has changed', state);
    })
  }

  openDialog(): void {
    this.dialog.open(
      AddStaffComponent,
      {
        ariaModal: true,
        maxWidth: 800
      }
      )
  }

}
