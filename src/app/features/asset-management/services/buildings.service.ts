import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  private readonly http = inject(HttpClient);

  constructor() { }

  /**
   *
   * @returns
   */
  getAll(): Observable<Building[]> {
    return this.http.get<Building[]>(``)
  }

  /**
   *
   * @param id
   * @returns
   */
  getById( id: string ): Observable<Building> {
    const searchId = id;
    return this.http.get<Building>(`/${searchId}`)
  }

  /**
   *
   * @param building
   * @returns
   */
  create( building: Building): Observable<Building> {
    const newBuilding = building;
    return this.http.post<Building>(``, newBuilding)
  }

  /**
   *
   * @param id
   * @param building
   * @returns
   */
  update( id: string, building: Building) {
    const searchId = id;
    const newBuilding = building;
    return this.http.patch<Building>(`/${searchId}`, newBuilding)
  }

  /**
   *
   * @param id
   * @returns
   */
  remove( id: string) {
    const searchId = id;
    return this.http.delete<Building>(`/${searchId}`)
  }
}
