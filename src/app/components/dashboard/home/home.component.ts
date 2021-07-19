import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardModel } from '../models/dashboard.model';
import { DashboardState } from '../state/dashboard.reducers';
import * as dashboarSelectors from '../state/dashboard.selectors';
import * as dashboarActions from '../state/dashboard.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data: Observable<DashboardModel | null>;
  public loading: Observable<boolean>;

  constructor(private store: Store<DashboardState>) {
    this.loading = this.store.pipe(select(dashboarSelectors.getLoading));
    this.store.dispatch(new dashboarActions.GetData());
    this.data = this.store.pipe(select(dashboarSelectors.getData));
  }

  ngOnInit(): void {}
}
