import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private http = inject(HttpClient);

  constructor() { }

  getAll(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`../assets/dummyData/staff.json`).pipe(

    );
  }

}
