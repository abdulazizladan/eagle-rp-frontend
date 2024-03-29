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

import { VendorManagementRoutingModule } from './vendor-management-routing.module';
import { VendorsListComponent } from './components/vendors-list/vendors-list.component';
import { VendorStore } from './store/vendor.store';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [
    VendorsListComponent,
    VendorDetailsComponent,
    AddVendorComponent,
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
    VendorManagementRoutingModule
  ],
  providers: [
    VendorStore
  ]
})
export class VendorManagementModule { }
