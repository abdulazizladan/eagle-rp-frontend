import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersStore } from '../../store/user.store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss'
})
export class ConfirmDeleteComponent {

  public store = inject(UsersStore);
  private dialogRef = inject(MatDialogRef<ConfirmDeleteComponent>);
  private snackbar = inject(MatSnackBar)

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public id: string
    ) {
  }

  openSnackbar() {
    this.snackbar.open("User removed successfully", "Close", {duration: 3000})
  }

  confirmDelete() {
    this.store.delete(this.id);
    this.openSnackbar();
    this.dialogRef.close();
  }

}
