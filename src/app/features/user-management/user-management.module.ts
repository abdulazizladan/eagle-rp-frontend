import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { UsersStore } from './store/user.store';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent,
    UserDetailsComponent,
    AddUserComponent,
    SnackbarComponent,
    ConfirmDeleteComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule,
    MatPaginatorModule,
    MatListModule,
    UserManagementRoutingModule
  ],
  providers: [
    UsersStore
  ]
})
export class UserManagementModule { }
