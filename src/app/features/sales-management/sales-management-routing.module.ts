import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesRecordComponent } from './components/sales-record/sales-record.component';

const routes: Routes = [
  {
    path: '',
    component: SalesRecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesManagementRoutingModule { }
