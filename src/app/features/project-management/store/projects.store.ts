import { signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Project } from "../models/project.model";
import { Task } from "../models/task.model";
import { computed, inject } from "@angular/core";
import { ProjectsService } from "../services/projects.service";

type ProjectsState = {
  projects: Array<Project>,
  tasks: Array<Task>,
  isLoading: boolean
}

export const initialState: ProjectsState = {
  projects: [],
  tasks: [],
  isLoading: false
}

export const ProjectsStore = signalStore(
  withState(initialState),
  withComputed((state) => ({
    projectsCount: computed(() => state.projects().length),
    tasksCount: computed(() => state.tasks().length)
  })),
  withMethods((state, projectService = inject(ProjectsService)) => ({
    loadAll() {

    },
    add() {

    },
    update() {

    },
    delete() {

    }
  }))
)
