import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user-management.reducer';
import { createUser } from '../../store/user-management.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  private dialogRef = inject(MatDialogRef<AddUserComponent>)

  newUserForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<{users: UserState}>
  ) {

  }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.newUserForm = this.fb.group({
      email: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      gender: [''],
      password: [''],
      status: ['active'],
      passwordConfirm: ['']
    })
  }

  submit() {
    const newUser = this.newUserForm.value;
    this.store.dispatch(createUser({user: newUser}));
    this.dialogRef.close();
  }

}
