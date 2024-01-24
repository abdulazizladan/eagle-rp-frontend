import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AuthStore]
})
export class LoginComponent implements OnInit{

  private fb: FormBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  public loginForm: FormGroup = new FormGroup({});
  store = inject(AuthStore);

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['admin@eagle.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required]]
    })
  }

  login() {
    const credentials = this.loginForm.value;
    this.authService.login(credentials)
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
