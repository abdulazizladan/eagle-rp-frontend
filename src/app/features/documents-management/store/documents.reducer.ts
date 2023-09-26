import { createReducer, on } from "@ngrx/store";
import { Status } from "../enums/status.enum";
import { DocumentModel } from "../models/document.model";
import { loadDocuments, loadDocumentsFailure, loadDocumentsSuccess } from "./documents.actions";

export class DocumentsState {
  "received": DocumentModel[];
  "sent": DocumentModel[];
  "archive": string[];
  "status": Status;
}

export const featureKey = "documents";

export const initialState: DocumentsState = {
  received: [],
  sent: [
    {
      id: "121234",
      title: "Proposal for stuff",
      description: "A letter to whom it may concern",
      file: "abc.pdf"
    }
  ],
  archive: [],
  status: Status.idle
}

export const DocumentsReducer = createReducer(
  initialState,
  on(loadDocuments, (state) => ({...state, status: Status.loading})),
  on(loadDocumentsSuccess, (state, {documents}) => ({...state, documents: documents, status: Status.success})),
  on(loadDocumentsFailure, (state, {error}) => ({...state, error: error, status: Status.error}))
)
