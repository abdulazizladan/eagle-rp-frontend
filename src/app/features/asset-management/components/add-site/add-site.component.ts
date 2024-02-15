import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { assetsStore } from '../../store/assets.store';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrl: './add-site.component.scss'
})
export class AddSiteComponent {

  private fb = inject(FormBuilder);
  store = inject(assetsStore);

  newSiteForm = this.fb.group({

  });

  submit(): void {

  }

}
