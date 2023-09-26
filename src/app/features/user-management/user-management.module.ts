import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserReducer, featureKey } from './store/user-management.reducer';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserEffects } from './store/user.effects';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



@NgModule({
  declarations: [
    UsersListComponent,
    AddUserComponent,
    UserDetailsComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(UserEffects),
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatDividerModule,
    UserManagementRoutingModule,
    StoreModule.forFeature(featureKey, UserReducer)
  ]
})
export class UserManagementModule { }
