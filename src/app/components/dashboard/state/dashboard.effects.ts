import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DashboardService } from '../services/dashboard.service';
import * as dashboardActions from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  constructor(
    private dashService: DashboardService,
    private action$: Actions,
    private snackBar: MatSnackBar
  ) {}

  public getData$ = createEffect(() => {
    return this.action$.pipe(
      ofType<dashboardActions.GetData>(
        dashboardActions.DashboardActionTypes.GET_DATA
      ),
      mergeMap((action: dashboardActions.GetData) => {
        return this.dashService.getDashboardDetails().pipe(
          map((data) => new dashboardActions.GetDataSuccess({ data: data })),
          catchError((err) => {
            this.snackBar.open('Something Went Wrong!', '', { duration: 2000 });
            return of(new dashboardActions.GetDataFailure({ error: err }));
          })
        );
      })
    );
  });
}
