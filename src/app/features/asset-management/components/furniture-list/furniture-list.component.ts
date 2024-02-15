import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFurnitureComponent } from '../add-furniture/add-furniture.component';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.scss'
})
export class FurnitureListComponent {

  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(
      AddFurnitureComponent,
      {
        ariaModal: true,
        maxWidth: 800
      }
    );
  }

}
