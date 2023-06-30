import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'users',
        loadChildren: () => import('../features/user-management/user-management.module').then(module => module.UserManagementModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('../features/staff-management/staff-management.module').then(module => module.StaffManagementModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('../features/asset-management/asset-management.module').then(module => module.AssetManagementModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('../features/project-management/project-management.module').then(module => module.ProjectManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
