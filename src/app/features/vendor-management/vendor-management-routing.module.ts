import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsListComponent } from './components/vendors-list/vendors-list.component';
import { VendorDetailsComponent } from './components/vendor-details/vendor-details.component';

const routes: Routes = [
  {
    path: '',
    component: VendorsListComponent
  },
  {
    path: ':id',
    component: VendorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorManagementRoutingModule { }
