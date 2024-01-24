import { inject } from "@angular/core";
import { signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { DocumentsService } from "../services/documents.service";

type DocumentState = {
  documents: Document[];
  isLoading: boolean
}

const initialState: DocumentState = {
  documents: [],
  isLoading: false
}

export const DocumentStore = signalStore(
  withState(initialState),
  withComputed(() => ({

  })),
  withMethods((store, documentsService = inject(DocumentsService)) => ({
    loadAll() {

    }
  })),
  withHooks({
    onInit() {

    },
    onDestroy() {

    }
  })
)
