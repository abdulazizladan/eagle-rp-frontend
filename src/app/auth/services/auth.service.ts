import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/loginCredential.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  login( credentials: LoginCredentials): Observable<string> {
    const loginData = credentials;
    return this.http.post<string>("../", loginData)
  }
}
