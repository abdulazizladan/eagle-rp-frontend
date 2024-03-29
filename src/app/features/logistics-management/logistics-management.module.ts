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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

import { LogisticsManagementRoutingModule } from './logistics-management-routing.module';
import { LogisticsDashboardComponent } from './components/logistics-dashboard/logistics-dashboard.component';
import { LogisticsStore } from './store/logistics.store';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [
    LogisticsDashboardComponent,
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
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatListModule,
    LogisticsManagementRoutingModule
  ],
  providers: [
    LogisticsStore
  ]
})
export class LogisticsManagementModule { }
