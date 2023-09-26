import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly http = inject(HttpClient);

  constructor() { }

  getState(): Observable<any> {
    return this.http.get<any>("");
  }
}
