import { ChangeDetectionStrategy, Component, OnInit, Output, inject, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { UsersStore } from '../../store/user.store';
import { UserStatus } from '../../enums/userStatus.enum';
import { User } from '../../models/user.model';
import { UserState } from '../../store/user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  private dialogRef = inject(MatDialogRef<AddUserComponent>);
  private snackbar = inject(MatSnackBar);
  private fb = inject(FormBuilder);
  readonly store = inject(UsersStore);

  addUser() {
    const newUser = this.newUserForm.value;
    this.store.add(newUser)
  }

  newUserForm: FormGroup = this.fb.group({
    id: [''],
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    middleName: [''],
    lastName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    status: UserStatus.active,
    passwordConfirm: ['', [Validators.required]]
  });

  openSnackbar() {
    this.snackbar.openFromComponent(SnackbarComponent, {duration: 3000})
  }

  submit() {
    const newUser = this.newUserForm.value;
    this.store.add(newUser);
    this.openSnackbar();
    this.dialogRef.close();
  }
  /**
   *
   */

}
