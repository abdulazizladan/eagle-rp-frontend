import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {

  private fb = inject(FormBuilder);

  projectForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    contractor: ['', [Validators.required]],
    milestones: this.fb.array([
      this.fb.group({

      })
    ])
  })

  get milestones(): FormArray {
    return this.projectForm.get('milestones') as FormArray
  }

  addMilestone(): void {
    const newMilestone = this.fb.group({
      'title': [''],
      'description': [''],
      'edd': ['']
    })
  }

  removeMilestone(index: number): void {
    this.milestones.removeAt(index);
  }

  submit(): void {

  }

}
