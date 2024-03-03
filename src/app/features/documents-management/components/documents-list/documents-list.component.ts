import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { DocumentStore } from '../../store/documents.store';
import { getState } from '@ngrx/signals';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsListComponent {

  displayedColumns: Array<string> = ["id", "title", "description", "type", "actions"]

  store = inject(DocumentStore);
  dialog = inject(MatDialog);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('documents state has changed', state)
    })
  }

  openDialog() {
    this.dialog.open(
      AddDocumentComponent,
      {
        ariaModal: true,
        maxWidth: 800
      }
    )
  }

  openConfirmDelete(id: string) {
    this.dialog.open(
      ConfirmDeleteComponent,
      {
        ariaModal: true,
        maxWidth: 800,
        data : id
      }
    )
  }
}
