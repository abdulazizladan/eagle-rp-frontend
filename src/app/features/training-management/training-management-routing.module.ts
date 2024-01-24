import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDashboardComponent } from './components/training-dashboard/training-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingManagementRoutingModule { }
