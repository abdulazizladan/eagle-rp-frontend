import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesManagementRoutingModule } from './sales-management-routing.module';
import { StoreModule } from '@ngrx/store';
import { SalesReducer, featureKey } from './store/sales.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SalesManagementRoutingModule,
    StoreModule.forFeature(featureKey, [SalesReducer])
  ]
})
export class SalesManagementModule { }
