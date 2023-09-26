import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Site } from '../models/site.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private readonly http = inject(HttpClient);

  constructor() { }

  /**
   *
   * @returns
   */
  getAll(): Observable<Site[]> {
    return this.http.get<Site[]>(``)
  }

  /**
   *
   * @param id
   * @returns
   */
  getById( id: string): Observable<Site> {
    const searchId = id;
    return this.http.get<Site>(`/${searchId}`)
  }

  /**
   *
   * @param site
   * @returns
   */
  create( site: Site): Observable<Site> {
    const newSite = site;
    return this.http.post<Site>(``, newSite)
  }

  /**
   *
   * @param id
   * @param site
   * @returns
   */
  update(id: string, site: Site) {
    const searchId = id;
    return this.http.patch<Site>(`/${searchId}`, site)
  }

  /**
   *
   * @param id
   * @returns
   */
  remove( id: string) {
    const removeId = id;
    return this.http.delete<Site>(`/${removeId}`)
  }
}
