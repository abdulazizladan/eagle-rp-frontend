import { Injectable, Signal, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, throwError, throwIfEmpty } from 'rxjs';
import { User } from '../models/user.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserStatus } from '../enums/userStatus.enum';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private http = inject(HttpClient);

  usersSignal: Signal<User[] | undefined> = toSignal(this.getAll());
  //readonly users = this.usersSignal.asReadonly();

  constructor() {
    this.getAll();
  }

  /**
   *
   * @returns Observable of users
   */
  getAll(): Observable<User[] | any> {
    return this.http.get<User[]>(`../assets/dummyData/users.json`).pipe(
      map(x => {return x}),
      catchError(x => {return x})
    )
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
