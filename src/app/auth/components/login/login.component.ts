import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthState } from '../../store/auth.reducer';
import { ErrorStateMatcher } from '@angular/material/core';
import { login } from '../../store/auth.actions';
import { LoginCredentials } from '../../models/loginCredential.model';
import { Observable } from 'rxjs';
import { Status } from '../../enums/status.enum';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  private readonly router = inject(Router);
  //auth$!: Observable<{authState: AuthState}>;
  status$!: Observable<Status>;
  private fb = inject(FormBuilder);
  loginForm!: FormGroup;
  emailError: string = "";

  constructor(
    private store: Store<{auth: AuthState}>
  ) {
  }

  ngOnInit() {
    this.initializeForm();
    //this.auth$ = this.store.select((auth) => auth)
    this.status$ = this.store.select((auth) => auth.auth.status)
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    const loginCredentials: LoginCredentials = {email: 'a@b.c', password: 'aaa'}
    this.store.dispatch(login({credentials: loginCredentials}));
    this.router.navigate(['./admin']);
  }

  matcher = new MyErrorStateMatcher;
}
