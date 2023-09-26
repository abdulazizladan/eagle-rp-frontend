import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProjectsState } from '../../store/reducers/project.reducer';
import { LoadProjects } from '../../store/actions/projects.actions';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects$!: Observable<Project[]>;

  private dialog = inject(MatDialog);

  private store = inject(Store<{projects: Project}>)

  ngOnInit() {
    this.store.dispatch(LoadProjects());
    this.projects$ = this.store.select(projects => {return projects})
  }

  openDialog() {
    this.dialog.open(AddProjectComponent)
  }
}
