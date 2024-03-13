import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  private fb = inject(FormBuilder);

  taskForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    team: this.fb.array([]),
    edd: ['']
  })

  get team() {
    return this.taskForm.get('team') as FormArray
  }

  addTeamMember(email: string) {
    const newTeamMember: FormGroup = this.fb.group({
      email: ['', Validators.required]
    });
    this.team.push(newTeamMember);
  }

  removeTeamMember(index: number) {
    this.team.removeAt(index);
  }

  submit(): void {

  }

}
