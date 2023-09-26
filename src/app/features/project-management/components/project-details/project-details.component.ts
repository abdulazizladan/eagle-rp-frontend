import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectsState } from '../../store/reducers/project.reducer';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  store = inject(Store<{project: ProjectsState}>)

}
