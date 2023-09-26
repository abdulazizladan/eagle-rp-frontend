import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { StaffDetailsComponent } from './components/staff-details/staff-details.component';

const routes: Routes = [
  {
    path: '',
    component: StaffListComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: StaffDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffManagementRoutingModule { }
