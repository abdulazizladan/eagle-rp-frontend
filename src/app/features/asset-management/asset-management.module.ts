import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetsDashboardComponent } from './components/assets-dashboard/assets-dashboard.component';
import { StoreModule } from '@ngrx/store';
import { assetsReducer, featureKey } from './store/assets.reducer';
import { BuildingsListComponent } from './components/buildings-list/buildings-list.component';


@NgModule({
  declarations: [
    AssetsDashboardComponent,
    BuildingsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    StoreModule.forFeature(featureKey, assetsReducer,),
    AssetManagementRoutingModule
  ]
})
export class AssetManagementModule { }
