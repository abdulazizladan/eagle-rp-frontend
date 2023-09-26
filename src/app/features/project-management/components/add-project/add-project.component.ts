import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProjectsState } from '../../store/reducers/project.reducer';
import { createProject } from '../../store/actions/projects.actions';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  private fb = inject(FormBuilder);
  private projectForm!: FormGroup;
  private store = inject(Store<{projects: ProjectsState}>)

  initializeForm() {
    this.projectForm = this.fb.group({

    })
  }

  ngOnInit() {
    this.initializeForm();
  }

  submit() {
    const formData = this.projectForm.value;
    this.store.dispatch(createProject())
  }

}
