import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToolComponent } from '../add-tool/add-tool.component';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.scss'
})
export class ToolsListComponent {

  private dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(
      AddToolComponent,
      {
        ariaModal: true,
        width: "800px"
      }
    );
  }

}
