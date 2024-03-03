import { Component, inject } from '@angular/core';
import { StaffStore } from '../../store/staff.store';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Staff } from '../../models/staff.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './add-staff.component.scss'
})
export class AddStaffComponent {

  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef<AddStaffComponent>)

  newStaffForm: FormGroup = this.fb.group({
    basicInfo: this.fb.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]]
    }),
    biodata: this.fb.group({
      gender: ['', [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      bloodGroup: ['']
    }),
    contactInfo: this.fb.group(({
      phoneNumber: [null],
      email: ['', Validators.email],
      homeAddress: ['', Validators.required]
    })),
    educationHistory: this.fb.array([]),
    employmentHistory: this.fb.array([])
  })
  store = inject(StaffStore);

  constructor() {

  }

  submit(): void {
    const newStaff = this.newStaffForm.value;
    this.store.add(newStaff);
    console.log(newStaff)
    this.snackbar.open("Staff added successfully!!", "Close", {duration: 3000});
    this.dialogRef.close();
  }

  addEducation() {
    const education: FormGroup = this.fb.group({
      institution: [''],
      yearOfCompletion: [0],
      certification: ['']
    })
    this.educationHistory.push(education)
  }

  removeEducation(index: number) {
    this.educationHistory.removeAt(index)
  }

  addEmployment() {
    const employment: FormGroup = this.fb.group({
      title: [''],
      employer: [''],
      from: [0],
      to: [0]
    });
    this.employmentHistory.push(employment)
  }

  removeEmployment(index: number) {
    this.employmentHistory.removeAt(index)
  }

  get employmentHistory() {
    return this.newStaffForm.get('employmentHistory') as FormArray;
  }

  get basicInfo(): FormGroup {
    return this.newStaffForm.get('basicInfo') as FormGroup;
  }

  get biodata(): FormGroup {
    return this.newStaffForm.get('biodata') as FormGroup;
  }

  getEmplymentHistory(itemIndex: number) {
    //return this.
  }

  get educationHistory(): FormArray {
    return this.newStaffForm.get('educationHistory') as FormArray;
  }

}
