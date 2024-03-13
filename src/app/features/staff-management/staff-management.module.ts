import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { StaffDetailsComponent } from './components/staff-details/staff-details.component';
import { StaffStore } from './store/staff.store';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    StaffListComponent,
    AddStaffComponent,
    StaffDetailsComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatExpansionModule,
    StaffManagementRoutingModule
  ],
  providers: [
    StaffStore
  ]
})
export class StaffManagementModule { }
