import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVendorComponent } from '../add-vendor/add-vendor.component';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss']
})
export class VendorsListComponent {

  private readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(AddVendorComponent)
  }

}
