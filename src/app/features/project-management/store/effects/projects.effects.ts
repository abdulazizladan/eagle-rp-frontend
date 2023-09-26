import { Injectable, inject } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { ProjectService } from "../../services/project.service";
import { TasksService } from "../../services/tasks.service";

@Injectable()
export class ProjectsEffects {

  private actions$ = inject(Actions);
  private projectsService = inject(ProjectService);
  private tasksService = inject(TasksService);

  loadProjects$ = createEffect(() => this.actions$.pipe(

  ))

  addProject$ = createEffect(() => this.actions$.pipe(

  ))

  loadTasks$ = createEffect(() => this.actions$.pipe(

  ))

  addTask$ = createEffect(() => this.actions$.pipe(

  ))
}
