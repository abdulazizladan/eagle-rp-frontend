import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../models/vendor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  private http = inject(HttpClient);

  constructor() { }

  /**
   *
   * @returns
   */
  getAll(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(``)
  }

  /**
   *
   * @param id
   * @returns
   */
  getById( id: string ): Observable<Vendor> {
    const searchId: string = id;
    return this.http.get<Vendor>(`/${searchId}`)
  }

  /**
   *
   * @param vendor
   * @returns
   */
  add( vendor: Vendor) {
    const newVendor = vendor;
    return this.http.post<Vendor>(``, newVendor)
  }

  /**
   *
   * @param id
   * @param vendor
   * @returns
   */
  update( id: string, vendor: Vendor) {
    const searchId: string = id;
    const newVendor = vendor;
    return this.http.patch<Vendor>(`/${searchId}`, newVendor)
  }
}
