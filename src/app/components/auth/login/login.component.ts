import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthModel } from '../model/auth.model';
import * as authActions from './../state/auth.actions';
import * as authReducers from './../state/auth.reducers';
import * as authSelectors from './../state/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  private user$: Observable<AuthModel | null>;
  public loading: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<authReducers.AuthState>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loading = this.store.pipe(select(authSelectors.getLoading));
    this.store.dispatch(new authActions.CheckAuth());
    this.user$ = this.store.pipe(select(authSelectors.getUser));
    this.user$.subscribe((u) => {
      if (u !== null) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/auth']);
      }
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.loginForm.valueChanges.subscribe(console.log);
  }

  public login(): void {
    if (this.loginForm.valid) {
      console.log('valid');

      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      this.snackBar.open('Loading..', '', { duration: 2000 });
      this.store.dispatch(
        new authActions.Login({ email: email, password: password })
      );
    } else {
      console.log('invalid');
      this.snackBar.open('Form is Invalid', '', { duration: 2000 });
    }
  }
}
