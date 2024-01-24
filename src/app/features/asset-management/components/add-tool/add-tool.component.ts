import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrl: './add-tool.component.scss'
})
export class AddToolComponent {

  private fb = inject(FormBuilder);

  newToolForm = this.fb.group({

  });

  submit(): void {

  }

}
