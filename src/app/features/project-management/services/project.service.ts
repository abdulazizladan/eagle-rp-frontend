import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private http = inject(HttpClient);

  constructor() {

  }

  /**
   *
   * @returns
   */
  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>('')
  }

  /**
   *
   * @param id
   * @returns
   */
  getByID( id: string ): Observable<Project> {
    const searchID = id;
    return this.http.get<Project>(`/${searchID}`)
  }

  /**
   *
   * @param project
   * @returns
   */
  create( project: Project ) {
    const newProject = project;
    return this.http.post<Project>(``, newProject)
  }

  /**
   *
   * @param id
   * @param project
   * @returns
   */
  update( id: string, project: Project ) {
    const searchID = id;
    const newProject = project;
    return this.http.patch<Project>(`/${searchID}`, newProject)
  }

  /**
   *
   * @param id
   * @returns
   */
  remove( id: string ) {
    const seadchID = id;
    return this.http.delete(`/${seadchID}`)
  }
}
