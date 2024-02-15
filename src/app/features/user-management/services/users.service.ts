import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, throwError, throwIfEmpty, toArray } from 'rxjs';
import { User } from '../models/user.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserStatus } from '../enums/userStatus.enum';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private http = inject(HttpClient);

  //readonly users = this.usersSignal.asReadonly();

  constructor() {
    this.getAll();
  }

  /**
   *
   * @returns Observable of users
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`../assets/dummyData/users.json`).pipe(
    )
  }

  getAlls(){
    return toSignal(this.http.get(`../assets/dummyData/users.json`), {initialValue: []});
  }

  getByID(id: string): Observable<User> {
    const searchID = id;
    return this.http.get<User>(`/${searchID}`).pipe(

    )
  }

  add(user: User) {
    const newUser = user;
    return this.http.post<User>(``, newUser).pipe()
  }

  update(id: string, user: User) {
    const updateID = id;
    const updatedUser = user;
    return this.http.patch<User>(`/${updateID}`, updatedUser).pipe()
  }

  delete(id: string) {
    const deleteID = id;
    return this.http.delete<User>(`/${deleteID}`).pipe()
  }

}
