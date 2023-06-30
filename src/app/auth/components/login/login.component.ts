import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/auth.reducer';
import { login } from '../../store/auth.actions';
import { LoginCredentials } from '../../models/loginCredential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(
    private store: Store<{authState: AuthState}>,
    private fb: FormBuilder
    ) {

  }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    const loginCredentials: LoginCredentials = {email: 'a@b.c', password: 'aaa'}
    this.store.dispatch(login({credentials: loginCredentials}))
  }
}
