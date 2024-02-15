import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsDashboardComponent } from './components/assets-dashboard/assets-dashboard.component';
import { SitesListComponent } from './components/sites-list/sites-list.component';
import { BuildingsListComponent } from './components/buildings-list/buildings-list.component';
import { MachineryListComponent } from './components/machinery-list/machinery-list.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { SiteDetailsComponent } from './components/site-details/site-details.component';
import { BuildingDetailsComponent } from './components/building-details/building-details.component';
import { MachineDetailsComponent } from './components/machine-details/machine-details.component';
import { ToolDetailsComponent } from './components/tool-details/tool-details.component';
import { FurnitureDetailsComponent } from './components/furniture-details/furniture-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';

const routes: Routes = [
  {
    path: '',
    component: AssetsDashboardComponent
  },
  {
    path: 'sites',
    component: SitesListComponent,
  },
  {
    path: 'site/:id',
    component: SiteDetailsComponent
  },
  {
    path: 'buildings',
    component: BuildingsListComponent
  },
  {
    path: 'building/:id',
    component: BuildingDetailsComponent
  },
  {
    path: 'machines',
    component: MachineryListComponent
  },
  {
    path: 'machine/:id',
    component: MachineDetailsComponent
  },
  {
    path: 'tools',
    component: ToolsListComponent
  },
  {
    path: 'tool/:id',
    component: ToolDetailsComponent
  },
  {
    path: 'furniture',
    component: FurnitureListComponent
  },
  {
    path: 'furniture/:id',
    component: FurnitureDetailsComponent
  },
  {
    path: 'vehicles',
    component: VehiclesListComponent
  },
  {
    path: 'vehicle/:id',
    component: VehicleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
