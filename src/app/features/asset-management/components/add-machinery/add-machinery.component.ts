import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-machinery',
  templateUrl: './add-machinery.component.html',
  styleUrl: './add-machinery.component.scss'
})
export class AddMachineryComponent {

  private fb = inject(FormBuilder);

  newMachineForm = this.fb.group({});

  submit(): void {

  }

}
