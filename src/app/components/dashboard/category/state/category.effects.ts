import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CategoryServiceService } from '../services/category-service.service';
import * as categoryActions from './category.actions';

@Injectable()
export class CategoryEffects {
  constructor(
    private categoryService: CategoryServiceService,
    private action$: Actions,
    private snackbar: MatSnackBar
  ) {}

  public getCategories$ = createEffect(() => {
    return this.action$.pipe(
      ofType<categoryActions.GetCategory>(
        categoryActions.CategoryActionType.GET_CATEGORY
      ),
      mergeMap((action: categoryActions.GetCategory) => {
        return this.categoryService.getMainCategory().pipe(
          map(
            (categories) =>
              new categoryActions.GetCategorySuccess({
                categories,
              })
          ),
          catchError((e) =>
            of(
              new categoryActions.GetCategoryFailure({
                error: 'Something Went Wrong.',
              })
            )
          )
        );
      })
    );
  });

  public addCategory$ = createEffect(() => {
    return this.action$.pipe(
      ofType<categoryActions.ADDCategory>(
        categoryActions.CategoryActionType.ADD_CATEGORY
      ),
      mergeMap((action: categoryActions.ADDCategory) => {
        return this.categoryService
          .addCategory(action.payload.category)
          .then((res) => {
            if (res) {
              return new categoryActions.ADDCategorySuccess({ result: res });
            } else {
              return new categoryActions.ADDCategoryFailure({
                error: 'Something Went wrong',
              });
            }
          })
          .catch(
            (e) =>
              new categoryActions.ADDCategoryFailure({
                error: `${e}`,
              })
          );
      })
    );
  });

  public updateCategory$ = createEffect(() => {
    return this.action$.pipe(
      ofType<categoryActions.UPDATECategory>(
        categoryActions.CategoryActionType.UPDATE_CATEGORY
      ),
      mergeMap((action: categoryActions.UPDATECategory) => {
        return this.categoryService
          .updateCategory(action.payload.category)
          .then((res) => {
            if (res) {
              return new categoryActions.UPDATECategorySuccess({ result: res });
            } else {
              return new categoryActions.UPDATECategoryFailure({
                error: 'Something Went wrong',
              });
            }
          })
          .catch(
            (e) =>
              new categoryActions.UPDATECategoryFailure({
                error: `${e}`,
              })
          );
      })
    );
  });

  public deleteCategory$ = createEffect(() => {
    return this.action$.pipe(
      ofType<categoryActions.DELETECategory>(
        categoryActions.CategoryActionType.DELETE_CATEGORY
      ),
      mergeMap((action: categoryActions.DELETECategory) => {
        return this.categoryService
          .deleteCategory(action.payload.category)
          .then((res) => {
            if (res) {
              return new categoryActions.DELETECategorySuccess({ result: res });
            } else {
              return new categoryActions.DELETECategoryFailure({
                error: 'Something Went wrong',
              });
            }
          })
          .catch(
            (e) =>
              new categoryActions.DELETECategoryFailure({
                error: `${e}`,
              })
          );
      })
    );
  });
}
