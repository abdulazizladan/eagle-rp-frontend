import { Injectable, inject } from '@angular/core';
import { env } from 'src/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);

  constructor() { }

  /**
  *Gets a list of all users.
  *
  * @returns An Observable of a list of users.
  */
  getAll(): Observable<User[]> {
    const baseUrl = env.baseUrl;
    // Returns an Observable that emits a list of users when the request is successful.
    return this.http.get<User[]>(`${baseUrl}/user`);
  }

  /**
  * Gets a single user by ID.
  *
  * @param id The ID of the user to get.
  * @returns An Observable of a single user.
  */
  getByID( id: string ): Observable<User> {
    // Gets the search ID from the parameter.
    const searchID = id;
    // Returns an Observable that emits a single user when the request is successful.
    return this.http.get<User>(`/${searchID}`)
  }

  /**
   *
   * @param user The user object
   * @returns An observable user
   */
  create( user: User): Observable<User> {
    const newUser = user;
    return of(newUser);
    //return this.http.post<User>(``, newUser)
  }

  /**
   *
   * @param id The user ID
   * @param user The user object
   * @returns An observable user
   */
  update( id: string, user: User): Observable<User> {
    const searchID = id;
    const updatedUser = user;
    return this.http.patch<User>(`/${searchID}`, updatedUser)
  }

  /**
   *
   * @param id The user ID
   * @returns An observable user
   */
  remove( id: string ): Observable<User> {
    const searchID = id;
    return this.http.delete<User>(`/${searchID}`)
  }
}
