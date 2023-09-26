import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { StaffDetailsComponent } from './components/staff-details/staff-details.component';
import { StoreModule } from '@ngrx/store';
import { StaffReducer, featureKey } from './store/staff.reducer';
import { AddStaffComponent } from './components/add-staff/add-staff.component';


@NgModule({
  declarations: [
    StaffListComponent,
    StaffDetailsComponent,
    AddStaffComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    StoreModule.forFeature(featureKey, StaffReducer),
    StaffManagementRoutingModule
  ]
})
export class StaffManagementModule { }
