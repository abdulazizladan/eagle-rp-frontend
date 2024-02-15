import { Component, OnDestroy, OnInit, effect, inject } from '@angular/core';
import { UsersStore } from '../../store/user.store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  id: string | null = "";
  displayedColumns: Array<string> = ['activity', 'date', 'time'];

  route = inject(ActivatedRoute)
  store = inject(UsersStore);
  email!: string;

  constructor() {
    effect(() => {

    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnDestroy() {

  }

}
