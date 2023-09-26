import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit{

  private fb = inject(FormBuilder);
  public newVendorForm!: FormGroup;

  initializeForm() {
    this.newVendorForm = this.fb.group({
      id: [''],
      name: ['']
    })
  }

  ngOnInit() {
    this.initializeForm()
  }

}
