import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsDashboardComponent } from './components/assets-dashboard/assets-dashboard.component';
import { BuildingsListComponent } from './components/buildings-list/buildings-list.component';
import { SitesListComponent } from './components/sites-list/sites-list.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsDashboardComponent
  },
  {
    path: 'sites',
    component: SitesListComponent
  },
  {
    path: 'buildings',
    component: BuildingsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
