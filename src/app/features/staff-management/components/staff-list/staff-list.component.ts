import { Component, OnInit, inject } from '@angular/core';
import { StaffState } from '../../store/staff.reducer';
import { Store } from '@ngrx/store';
import { loadStaff } from '../../store/staff.actions';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Staff } from '../../models/staff.model';
import { AddStaffComponent } from '../add-staff/add-staff.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  private dialog = inject(MatDialog);

  staff$!: Observable<Staff[]>;

  displayedColumns: string[] = ["id", "firstName", "middleName", "lastName", "actions"]

  constructor(
    private store: Store<{registry: StaffState}>
  ) {
      this.staff$ = this.store.select((registry) => registry.registry.staff).pipe()
  }

  ngOnInit() {
    this.store.dispatch(loadStaff());
  }

  openDialog() {
    this.dialog.open(AddStaffComponent, {})
  }

}
