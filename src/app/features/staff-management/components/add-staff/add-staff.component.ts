import { Component, inject } from '@angular/core';
import { StaffStore } from '../../store/staff.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Staff } from '../../models/staff.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss'
})
export class AddStaffComponent {

  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef<AddStaffComponent>)

  newStaffForm: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    middleName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],

  })
  store = inject(StaffStore);

  constructor() {

  }

  submit(): void {
    const newStaff = this.newStaffForm.value;
    this.store.add(newStaff);
    this.snackbar.open("Staff added successfully!!", "Close");
    this.dialogRef.close();
  }

}
