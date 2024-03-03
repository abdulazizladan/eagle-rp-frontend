import { Component, inject, Inject } from '@angular/core';
import { DocumentStore } from '../../store/documents.store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss'
})
export class ConfirmDeleteComponent {

  store = inject(DocumentStore);
  private dialogRef = inject(MatDialogRef<ConfirmDeleteComponent>);
  snackBar = inject(MatSnackBar);
  //route = inject(Route)

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public id: string
  ) {
  }

  openSnackBar(): void {
    this.snackBar.open("Document deleted successfully", "Close", {duration: 3000});
  }

  delete(): void {
    this.store.delete(this.id);
    this.openSnackBar();
    this.dialogRef.close();
  }
}
