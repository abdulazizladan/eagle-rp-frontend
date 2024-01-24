import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrl: './add-site.component.scss'
})
export class AddSiteComponent {

  private fb = inject(FormBuilder);

  newSiteForm = this.fb.group({

  });

  submit(): void {

  }

}
