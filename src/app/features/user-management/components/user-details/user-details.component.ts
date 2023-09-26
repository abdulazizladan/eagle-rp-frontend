import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private dialog = inject(MatDialog);

  @Input()
  userData!: User;

  constructor() {

  }

  ngOnInit() {

  }

  openPasswordResetDialog() {
    this.dialog.open(ResetPasswordComponent)
  }

}
