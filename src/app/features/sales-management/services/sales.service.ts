import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvoiceType } from '../models/invoice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private http = inject(HttpClient);

  constructor() { }

  createInvoice( data: InvoiceType ): Observable<InvoiceType> {
    const invoiceData = data;
    return this.http.post<InvoiceType>(``, data)
  }
}
