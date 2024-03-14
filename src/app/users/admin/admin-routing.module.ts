import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        title: 'Admin | Dashboard',
        component: DashboardComponent
      },
      {
        path: 'organization',
        loadChildren: () => import('../../features/organization-management/organization-management.module').then(module => module.OrganizationManagementModule)
      },
      {
        path: 'users',
        title: 'Admin | Users',
        loadChildren: () => import("../../features/user-management/user-management.module").then(module => module.UserManagementModule)
      },
      {
        path:'documents',
        title: 'Admin | Documents',
        loadChildren: () => import('../../features/documents-management/documents-management.module').then(module => module.DocumentsManagementModule)
      },
      {
        path: 'staff',
        title: 'Admin | Staff',
        loadChildren: () => import('../../features/staff-management/staff-management.module').then(module =>module.StaffManagementModule)
      },
      {
        path: 'training',
        title: 'Admin | Training',
        loadChildren: () => import('../../features/training-management/training-management.module').then(module => module.TrainingManagementModule)
      },
      {
        path: 'assets',
        title: 'Admin | Assets',
        loadChildren: () => import('../../features/asset-management/asset-management.module').then(module => module.AssetManagementModule)
      },
      {
        path: 'projects',
        title: 'Admin | Projects',
        loadChildren: () => import('../../features/project-management/project-management.module').then(module => module.ProjectManagementModule)
      },
      {
        path: 'sales',
        title: 'Admin | Sales',
        loadChildren: () => import('../../features/sales-management/sales-management.module').then(module => module.SalesManagementModule)
      },
      {
        path: 'logistics',
        title: 'Admin | Logistics',
        loadChildren: () => import('../../features/logistics-management/logistics-management.module').then(module => module.LogisticsManagementModule)
      },
      {
        path: 'vendors',
        title: 'Admin | Vendors',
        loadChildren: () => import('../../features/vendor-management/vendor-management.module').then(module => module.VendorManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
