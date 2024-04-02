import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { OrganizationManagementRoutingModule } from './organization-management-routing.module';
import { OrganizationDetailsComponent } from './components/organization-details/organization-details.component';
import { OrganizationStore } from './store/organization.store';


@NgModule({
  declarations: [
    OrganizationDetailsComponent
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
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
    MatListModule,
    OrganizationManagementRoutingModule
  ],
  providers: [
    OrganizationStore
  ]
})
export class OrganizationManagementModule { }
