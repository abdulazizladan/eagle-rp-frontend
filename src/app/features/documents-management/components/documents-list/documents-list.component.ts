import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { AddDocumentComponent } from '../add-document/add-document.component';
import { DocumentsState } from '../../store/documents.reducer';
import { loadDocuments } from '../../store/documents.actions';
import { Observable } from 'rxjs';
import { DocumentModel } from '../../models/document.model';
import { Status } from '../../enums/status.enum';

@Component({
  selector: 'app-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.scss']
})
export class DocumentsListComponent {

  sent$!: Observable<DocumentModel[]>;
  received$!: Observable<DocumentModel[]>;
  archives$!: Observable<DocumentModel[]>;
  status$!: Observable<Status>;

  private dialog = inject(MatDialog);

  public displayedColumns: string[] = ["title", "description", "date", "action"];

  constructor(
    private store: Store<{documents: DocumentsState}>
  ) {
    this.sent$ = this.store.select((documents) => documents.documents.sent)
  }

  ngOnInit() {
    this.store.dispatch(loadDocuments());
    this.status$ = this.store.select((state) => state.documents.status)
  }

  openDialog() {
    this.dialog.open(AddDocumentComponent)
  }
}
