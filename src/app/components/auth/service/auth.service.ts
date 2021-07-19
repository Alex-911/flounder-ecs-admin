import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthModel } from './../model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<firebase.default.User | null>;

  constructor(private auth: AngularFireAuth) {
    this.user$ = this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return of(user);
        } else {
          return of(null);
        }
      })
    );
  }

  public checkAuth(): Observable<AuthModel | null> {
    return this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return of({
            userUid: user!.uid,
            displayName: user!.displayName,
            userEmail: user!.email,
            userRole: 'admin',
          } as AuthModel);
        } else {
          return of(null);
        }
      })
    );
  }

  public async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<AuthModel | null> {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );

      const user = await this.auth.currentUser;

      return {
        userUid: user!.uid,
        displayName: user!.displayName,
        userEmail: user!.email,
        userRole: 'admin',
      } as AuthModel;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async logout(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.error(error);
    }
  }
}
