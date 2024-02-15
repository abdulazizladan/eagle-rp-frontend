import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private http = inject(HttpClient)

  constructor() { }

  getAll(): Observable<Document[]> {
    return this.http.get<Document[]>(`../assets/dummyData/documents.json`).pipe(
    )
  }

  getByID(id: string) {

  }

  create(document: Document) {

  }

  update(id: string, document: Document) {

  }

  delete(id: string) {

  }
}
