import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../../auth/state/auth.reducers';
import { AuthModel } from '../../auth/model/auth.model';
import { getUser } from '../../auth/state/auth.selectors';
import { CheckAuth, Logout } from '../../auth/state/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  public user: Observable<AuthModel | null>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AuthState>,
    private router: Router
  ) {
    this.store.dispatch(new CheckAuth());
    this.user = this.store.pipe(select(getUser));
    this.user.subscribe((u) => {
      if (u === null) {
        this.router.navigate(['/auth']);
      }
    });
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }
}
