import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { AdminRoutingModule } from './admin-routing.module';
import { StoreModule } from '@ngrx/store';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminStore } from './store/admin.store';


@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    AdminRoutingModule,
    AdminRoutingModule
  ],
  providers: [
    {
      provide: NgChartsConfiguration,
      useValue: { generateColors: false }
    },
    AdminStore
  ]
})
export class AdminModule { }
