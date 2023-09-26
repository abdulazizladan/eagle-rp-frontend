import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

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
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
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
        path: 'documents',
        loadChildren: () => import('../features/documents-management/documents-management.module').then(module => module.DocumentsManagementModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('../features/asset-management/asset-management.module').then(module => module.AssetManagementModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('../features/project-management/project-management.module').then(module => module.ProjectManagementModule)
      },
      {
        path: 'vendors',
        loadChildren: () => import('../features/vendors-management/vendors-management.module').then(module => module.VendorsManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
