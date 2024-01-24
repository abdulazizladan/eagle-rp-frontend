import { Injectable, inject } from '@angular/core';
import { UserLogin } from '../models/login.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private readonly router = inject(Router);

  constructor() { }

  login( credentials: UserLogin ) {
    const loginCredentials = credentials;
    if(credentials.email === "admin@eagle.com" && credentials.password === "password"){
    //return this.http.post<any>(`url`, loginCredentials);
      return this.router.navigate(['admin'])
    }else{
      return null;
    }
  }
}
