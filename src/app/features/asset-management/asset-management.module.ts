import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetsDashboardComponent } from './components/assets-dashboard/assets-dashboard.component';
import { AddSiteComponent } from './components/add-site/add-site.component';
import { AddBuildingComponent } from './components/add-building/add-building.component';
import { AddMachineryComponent } from './components/add-machinery/add-machinery.component';
import { AddToolComponent } from './components/add-tool/add-tool.component';
import { AddFurnitureComponent } from './components/add-furniture/add-furniture.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { SitesListComponent } from './components/sites-list/sites-list.component';
import { BuildingsListComponent } from './components/buildings-list/buildings-list.component';
import { MachineryListComponent } from './components/machinery-list/machinery-list.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { assetsStore } from './store/assets.store';


@NgModule({
  declarations: [
    AssetsDashboardComponent,
    AddSiteComponent,
    AddBuildingComponent,
    AddMachineryComponent,
    AddToolComponent,
    AddFurnitureComponent,
    AddVehicleComponent,
    SitesListComponent,
    BuildingsListComponent,
    MachineryListComponent,
    ToolsListComponent,
    FurnitureListComponent,
    VehiclesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
    AssetManagementRoutingModule
  ],
  providers: [
    assetsStore
  ]
})
export class AssetManagementModule { }
