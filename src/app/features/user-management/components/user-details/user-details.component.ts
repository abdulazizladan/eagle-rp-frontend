import { Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { UsersStore } from '../../store/user.store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  id: string | null = "";
  user: User | undefined = undefined;
  displayedColumns: Array<string> = ['activity', 'date', 'time'];
  dialog = inject(MatDialog);

  router = inject(Router);
  route = inject(ActivatedRoute);
  store = inject(UsersStore);
  email!: string;

  constructor() {
    effect(() => {

    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = this.store.users().find(user => user.id == this.id);
    if(this.user == undefined){
    }
  }

  ngOnDestroy() {

  }

  openResetDialog() {
    this.dialog.open(ResetPasswordComponent, {})
  }

  toggleDisable() {
    console.log(this.id)
  }

}
