import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBuildingComponent } from '../add-building/add-building.component';

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrl: './buildings-list.component.scss'
})
export class BuildingsListComponent {

  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(
      AddBuildingComponent,
      {
        ariaModal: true,
        width: "800px"
      }
    );
  }

}
