import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDashboardComponent } from './components/training-dashboard/training-dashboard.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingDashboardComponent
  },
  {
    path: ':id',
    component: TrainingDetailsComponent,
    data: {id: ''}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingManagementRoutingModule { }
