import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMachineryComponent } from '../add-machinery/add-machinery.component';

@Component({
  selector: 'app-machinery-list',
  templateUrl: './machinery-list.component.html',
  styleUrl: './machinery-list.component.scss'
})
export class MachineryListComponent {

  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(
      AddMachineryComponent,
      {
        ariaModal: true,
        width: "800px"
      }
    );
  }

}
