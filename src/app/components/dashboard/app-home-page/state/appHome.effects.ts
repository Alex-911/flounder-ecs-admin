import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AppHomeService } from '../services/app-home.service';
import * as homeActions from './appHome.actions';

@Injectable()
export class AppHomeEffects {
  constructor(
    private homeService: AppHomeService,
    private action$: Actions,
    private snackBar: MatSnackBar
  ) {}

  public getHomeProducts$ = createEffect(() => {
    return this.action$.pipe(
      ofType<homeActions.GetAppHomeProducts>(
        homeActions.HomeActionType.GET_APP_HOME_PRODUCTS
      ),
      mergeMap((action: homeActions.GetAppHomeProducts) => {
        return this.homeService.getHomeProducts().pipe(
          map(
            (products) =>
              new homeActions.GetAppHomeProductsSuccess({ products })
          ),
          catchError((e) =>
            of(new homeActions.GetAppHomeProductsFailure({ error: e }))
          )
        );
      })
    );
  });

  public addHomeProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType<homeActions.AddAppHomeProducts>(
        homeActions.HomeActionType.ADD_APP_HOME_PRODUCTS
      ),
      mergeMap(async (action: homeActions.AddAppHomeProducts) => {
        return this.homeService
          .addHomeProduct(action.payload.product)
          .then((res) => {
            if (res) {
              return new homeActions.AddAppHomeProductsSuccess({ result: res });
            } else {
              return new homeActions.AddAppHomeProductsFailure({
                error: 'Adding Product Failed',
              });
            }
          })
          .catch((e) => {
            return new homeActions.AddAppHomeProductsFailure({
              error: `${e}`,
            });
          });
      })
    );
  });

  public updateHomeProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType<homeActions.UpdateAppHomeProducts>(
        homeActions.HomeActionType.UPDATE_APP_HOME_PRODUCTS
      ),
      mergeMap(async (action: homeActions.UpdateAppHomeProducts) => {
        return this.homeService
          .updateHomeProduct(action.payload.product)
          .then((res) => {
            if (res) {
              return new homeActions.UpdateAppHomeProductsSuccess({
                result: res,
              });
            } else {
              return new homeActions.UpdateppHomeProductsFailure({
                error: 'Updating Product Failed',
              });
            }
          })
          .catch((e) => {
            return new homeActions.UpdateppHomeProductsFailure({
              error: `${e}`,
            });
          });
      })
    );
  });

  public deleteHomeProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType<homeActions.DeleteAppHomeProducts>(
        homeActions.HomeActionType.DELETE_APP_HOME_PRODUCTS
      ),
      mergeMap(async (action: homeActions.DeleteAppHomeProducts) => {
        return this.homeService
          .deleteHomeProduct(action.payload.product)
          .then((res) => {
            if (res) {
              return new homeActions.DeleteAppHomeProductsSuccess({
                result: res,
              });
            } else {
              return new homeActions.DeleteAppHomeProductsFailure({
                error: 'Deleting Product Failed',
              });
            }
          })
          .catch((e) => {
            return new homeActions.DeleteAppHomeProductsFailure({
              error: `${e}`,
            });
          });
      })
    );
  });
}
