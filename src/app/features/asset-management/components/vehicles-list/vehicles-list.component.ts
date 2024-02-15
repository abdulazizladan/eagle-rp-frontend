import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent {

  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(
      AddVehicleComponent,
      {
        ariaModal: true,
        maxWidth: 800
      }
    );
  }

}
