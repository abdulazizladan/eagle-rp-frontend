import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentModel } from '../models/document.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private http = inject(HttpClient)

  constructor() { }

  getAll(): Observable<DocumentModel[]> {
    return this.http.get<DocumentModel[]>(`../assets/dummyData/documents.json`);
  }
}
