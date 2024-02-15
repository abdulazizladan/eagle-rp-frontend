import { computed, inject } from "@angular/core";
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { DocumentsService } from "../services/documents.service";
import { Document } from "../models/document.model";

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
  withComputed(({documents}) => ({
    documentsCount: computed(() => documents().length)
  })),
  withMethods((state, documentsService = inject(DocumentsService)) => ({
    async loadAll() {
      patchState(state, {documents: []});
      documentsService.getAll().subscribe((documents) => {
        patchState(state, {documents})
      });
    },
    add(document: Document) {
      const newDocument = document;
      patchState(state, {documents: [...state.documents(), newDocument]})
    },
    delete(id: string) {
      patchState(state, {documents: state.documents().filter(x => x.id !== id)})
    }
  })),
  withHooks({
    onInit({loadAll}) {
      loadAll()
    },
    onDestroy() {

    }
  })
)
