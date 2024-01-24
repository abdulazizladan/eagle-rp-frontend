import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SalesManagementRoutingModule } from './sales-management-routing.module';
import { CreateInvoiceComponent } from './components/create-invoice/create-invoice.component';
import { SalesRecordComponent } from './components/sales-record/sales-record.component';
import { SalesStore } from './store/sales.store';


@NgModule({
  declarations: [
    CreateInvoiceComponent,
    SalesRecordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatProgressBarModule,
    SalesManagementRoutingModule
  ],
  providers: [
    SalesStore
  ]
})
export class SalesManagementModule { }
