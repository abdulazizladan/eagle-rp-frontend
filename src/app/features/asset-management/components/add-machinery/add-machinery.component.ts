import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-machinery',
  templateUrl: './add-machinery.component.html',
  styleUrl: './add-machinery.component.scss'
})
export class AddMachineryComponent {

  private fb = inject(FormBuilder);

  newMachineForm = this.fb.group({
    brand: [''],
    model: [''],
    properties: this.fb.array([
      this.fb.group({
        key: [''],
        unit: [''],
        value: ['']
      })
    ])
  });

  get Properties(): FormArray {
    return this.newMachineForm.get('properties') as FormArray
  }

  remove(): void {
  }

  submit(): void {

  }

}
