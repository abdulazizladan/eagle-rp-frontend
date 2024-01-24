import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { DocumentStore } from '../../store/documents.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrl: './documents-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentsListComponent {

  displayedColumns: Array<string> = ["id", "title", "description", "type", "actions"]

  store = inject(DocumentStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('documents state has changed', state)
    })
  }
}