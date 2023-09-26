import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly http = inject(HttpClient);

  constructor() {

  }

  /**
   *
   * @returns
   */
  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>("")
  }

  /**
   *
   * @param id
   * @returns
   */
  getByID( id: string ): Observable<Task> {
    return this.http.get<Task>(`/${id}`)
  }

  /**
 *
 * @param task
 * @returns
 */
  create( task: Task): Observable<Task> {
    const newTask = task;
    return this.http.post<Task>("", newTask)
  }

  /**
   *
   * @param id
   * @param task
   */
  update(id: string, task: Task) {

  }

  /**
   *
   * @param id
   */
  remove( id: string ) {

  }
}
