import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetsDashboarComponent } from './components/assets-dashboar/assets-dashboar.component';


@NgModule({
  declarations: [
    AssetsDashboarComponent
  ],
  imports: [
    CommonModule,
    AssetManagementRoutingModule
  ]
})
export class AssetManagementModule { }
