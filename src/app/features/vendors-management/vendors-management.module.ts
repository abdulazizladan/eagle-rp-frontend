import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { VendorsManagementRoutingModule } from './vendors-management-routing.module';
import { VendorsListComponent } from './components/vendors-list/vendors-list.component';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';


@NgModule({
  declarations: [
    VendorsListComponent,
    VendorDetailsComponent,
    AddVendorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
    ,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    VendorsManagementRoutingModule
  ]
})
export class VendorsManagementModule { }
