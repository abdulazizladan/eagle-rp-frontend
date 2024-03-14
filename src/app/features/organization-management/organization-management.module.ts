import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationManagementRoutingModule } from './organization-management-routing.module';
import { OrganizationDetailsComponent } from './components/organization-details/organization-details.component';


@NgModule({
  declarations: [
    OrganizationDetailsComponent
  ],
  imports: [
    CommonModule,
    OrganizationManagementRoutingModule
  ]
})
export class OrganizationManagementModule { }
