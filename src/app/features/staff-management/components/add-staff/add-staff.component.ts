import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from '../../services/staff.service';
import { Store } from '@ngrx/store';
import { StaffState } from '../../store/staff.reducer';
import { createStaff, loadStaff } from '../../store/staff.actions';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  private store = inject(Store<{registry: StaffState}>)
  public newStaffForm!: FormGroup;
  private fb = inject(FormBuilder);
  private staffService = inject(StaffService);

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.newStaffForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      biodata: this.fb.group({
        gender: ['', [Validators.required]],
        dateOfBirth: [null]
      }),
      employment: this.fb.group({
        dateOfEmployment: ['', [Validators.required]]
      })
    })
  }

  submit() {
    //const formData = this.newStaffForm.value;
    const newStaff = {
      id: "1270",
      firstName: "Sani",
      middleName: "Aminu",
      lastName: "Tahir",
      employment: {
        dateOfEmployment: new Date(1825334835)
      },
      biodata: {
        gender:  "m",
        dateOfBirth: new Date(12980045283)
      }
    };

    this.store.dispatch(createStaff({staff: newStaff}))
  }

}
