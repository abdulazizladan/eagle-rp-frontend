import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrl: './add-furniture.component.scss'
})
export class AddFurnitureComponent {

  private fb = inject(FormBuilder);

  newFurnitureForm = this.fb.group({

  })

  submit(): void {

  }

}
