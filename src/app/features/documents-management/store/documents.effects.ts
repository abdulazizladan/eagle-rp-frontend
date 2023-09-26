import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DocumentsService } from "../services/documents.service";
import { loadDocuments, loadDocumentsFailure, loadDocumentsSuccess } from "./documents.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class DocumentsEffects{
  private actions$ = inject(Actions);
  private documentsService = inject(DocumentsService);

  constructor() {

  };

  loadDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDocuments),
      exhaustMap(() => this.documentsService.getAll().pipe(
        map(documents => loadDocumentsSuccess({documents})),
        catchError((error) => of(loadDocumentsFailure(error)))
      ))
    )
  );

}
