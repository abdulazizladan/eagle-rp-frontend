import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { ProjectsStore } from '../../store/projects.store';
import { getState } from '@ngrx/signals';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectDashboardComponent {

  store = inject(ProjectsStore);
  private dialog = inject(MatDialog);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('projects state has changed', state)
    })
  }

  openAddProjectDialog() {
    this.dialog.open(AddProjectComponent);
  }

  openAddTaskDialog() {
    this.dialog.open(AddTaskComponent);
  }

}
