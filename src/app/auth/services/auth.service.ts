import { Injectable, inject } from '@angular/core';
import { LoginCredentials } from '../models/loginCredential.model';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);

  constructor( ) {

  }

  /**
   *
   * @param credentials
   * @returns An observable of user token
   */
  login( credentials: LoginCredentials): Observable<string> {
    //
    const loginData = credentials;
    //return this.http.post<string>("", loginData)
    return this.http.get<string>("./assets/dummyData/auth.json")
  }
}
