import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsDashboardComponent } from './components/assets-dashboard/assets-dashboard.component';
import { SitesListComponent } from './components/sites-list/sites-list.component';
import { BuildingsListComponent } from './components/buildings-list/buildings-list.component';
import { MachineryListComponent } from './components/machinery-list/machinery-list.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';

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
  },
  {
    path: 'machines',
    component: MachineryListComponent
  },
  {
    path: 'tools',
    component: ToolsListComponent
  },
  {
    path: 'furniture',
    component: FurnitureListComponent
  },
  {
    path: 'vehicles',
    component: VehiclesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
