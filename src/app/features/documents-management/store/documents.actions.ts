import { createAction, props } from "@ngrx/store";
import { DocumentModel } from "../models/document.model";

export const loadDocuments = createAction("[DOCUMENTS] Load Documents");
export const loadDocumentsSuccess = createAction("[DOCUMENTS] Load Documents Success", props<{documents: DocumentModel[]}>());
export const loadDocumentsFailure = createAction("[DOCUMENTS] Load Documents Failure", props<{error: string}>());
export const createDocument = createAction("[DOCUMENTS] Add Document");
export const createDocumentSuccess = createAction("[DOCUMENTS] Add Document", props<{document: DocumentModel}>());
export const createDocumentFailure = createAction("[DOCUMENTS] Add Document", props<{error: string}>());
