import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SubCategoryService } from '../service/sub-category.service';
import * as subCategoryAction from './subCategory.actions';

@Injectable()
export class SubCategoryEffects {
  constructor(
    private subCategoryService: SubCategoryService,
    private action$: Actions,
    private snackbar: MatSnackBar
  ) {}

  public getCategories$ = createEffect(() => {
    return this.action$.pipe(
      ofType<subCategoryAction.GetSubCategory>(
        subCategoryAction.SubCategoryActionType.GET_SUB_CATEGORY
      ),
      mergeMap((action: subCategoryAction.GetSubCategory) => {
        return this.subCategoryService
          .getSubCategories(action.payload.mainCategory)
          .pipe(
            map(
              (subCategories) =>
                new subCategoryAction.GetSubCategorySuccess({
                  subCategories,
                })
            ),
            catchError((e) =>
              of(
                new subCategoryAction.GetSubCategoryFailure({
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
      ofType<subCategoryAction.ADDSubCategory>(
        subCategoryAction.SubCategoryActionType.ADD_SUB_CATEGORY
      ),
      mergeMap(async (action: subCategoryAction.ADDSubCategory) => {
        return this.subCategoryService
          .addCategory(action.payload.mainCategory, action.payload.subCategory)
          .then(async (res) => {
            if (res) {
              return new subCategoryAction.ADDSubCategorySuccess({
                result: res,
              });
            } else {
              return new subCategoryAction.ADDSubCategoryFailure({
                error: 'Something Went wrong',
              });
            }
          })
          .catch(
            (e) =>
              new subCategoryAction.ADDSubCategoryFailure({
                error: `${e}`,
              })
          );
      })
    );
  });

  public updateCategory$ = createEffect(() => {
    return this.action$.pipe(
      ofType<subCategoryAction.UPDATESubCategory>(
        subCategoryAction.SubCategoryActionType.UPDATE_SUB_CATEGORY
      ),
      mergeMap(async (action: subCategoryAction.UPDATESubCategory) => {
        return this.subCategoryService
          .updateCategory(
            action.payload.mainCategory,
            action.payload.subCategory
          )
          .then(async (res) => {
            if (res) {
              return new subCategoryAction.UPDATESubCategorySuccess({
                result: res,
              });
            } else {
              return new subCategoryAction.UPDATESubCategoryFailure({
                error: 'Something Went wrong',
              });
            }
          })
          .catch(
            (e) =>
              new subCategoryAction.UPDATESubCategoryFailure({
                error: `${e}`,
              })
          );
      })
    );
  });

  public deleteCategory$ = createEffect(() => {
    return this.action$.pipe(
      ofType<subCategoryAction.DELETESubCategory>(
        subCategoryAction.SubCategoryActionType.DELETE_SUB_CATEGORY
      ),
      mergeMap(async (action: subCategoryAction.DELETESubCategory) => {
        return this.subCategoryService
          .deleteCategory(
            action.payload.mainCategory,
            action.payload.subCategory
          )
          .then(async (res) => {
            if (res) {
              return new subCategoryAction.DELETESubCategorySuccess({
                result: res,
              });
            } else {
              return new subCategoryAction.DELETESubCategoryFailure({
                error: 'Something Went wrong',
              });
            }
          })
          .catch(
            (e) =>
              new subCategoryAction.DELETESubCategoryFailure({
                error: `${e}`,
              })
          );
      })
    );
  });
}
