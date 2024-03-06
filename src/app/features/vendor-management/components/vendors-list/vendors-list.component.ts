import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { VendorStore } from '../../store/vendor.store';
import { getState } from '@ngrx/signals';
import { MatDialog } from '@angular/material/dialog';
import { AddVendorComponent } from '../add-vendor/add-vendor.component';

/** Stripe service */
import { StripeService } from 'ngx-stripe';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrl: './vendors-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorsListComponent {

  store = inject(VendorStore);
  dialog = inject(MatDialog);


  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('vendors state has changed', state)
    })
  }

  ngOnInit() {
    //this.stripeService.elements().create('card').then((element) => {
    //  this.card = element;
    //  // Mount the element to a container in your template
    //  element.mount('#card-element');
    //});
  }

  openDialog(): void {
    this.dialog.open(
      AddVendorComponent,
      {
        ariaModal: true,
        width: "800px"
      }
    )
  }

}
