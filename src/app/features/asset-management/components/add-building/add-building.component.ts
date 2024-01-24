import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrl: './add-building.component.scss'
})
export class AddBuildingComponent {

  private fb = inject(FormBuilder);

  newBuildingForm = this.fb.group({});

  submit(): void {

  }

}
