import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductManagerService } from '../services/product-manager.service';
import * as prodActions from './product-manager.actions';

@Injectable()
export class ProductManagerEffects {
  constructor(
    private prodService: ProductManagerService,
    private action$: Actions,
    private snackBar: MatSnackBar
  ) {}

  public getProducts$ = createEffect(() => {
    return this.action$.pipe(
      ofType<prodActions.GetProducts>(
        prodActions.ProductActionTypes.GET_PRODUCTS
      ),
      mergeMap((action: prodActions.GetProducts) => {
        return this.prodService.getProducts().pipe(
          map(
            (products) =>
              new prodActions.GetProductsSuccess({ products: products })
          ),
          catchError((err) =>
            of(new prodActions.GetProductsFailure({ error: err }))
          )
        );
      })
    );
  });

  public getNextProducts$ = createEffect(() => {
    return this.action$.pipe(
      ofType<prodActions.GetNextProducts>(
        prodActions.ProductActionTypes.GET_NEXT_PRODUCTS
      ),
      mergeMap((action: prodActions.GetNextProducts) => {
        return this.prodService.getNextProduct(action.payload.lastProduct).pipe(
          map(
            (products) =>
              new prodActions.GetNextProductsSuccess({ products: products })
          ),
          catchError((err) =>
            of(new prodActions.GetNextProductsFailure({ error: err }))
          )
        );
      })
    );
  });

  public getPreviousProducts$ = createEffect(() => {
    return this.action$.pipe(
      ofType<prodActions.GetPreviousProducts>(
        prodActions.ProductActionTypes.GET_PREVIOUS_PRODUCTS
      ),
      mergeMap((action: prodActions.GetPreviousProducts) => {
        return this.prodService
          .getPreviousProducts(action.payload.firstProduct)
          .pipe(
            map(
              (products) =>
                new prodActions.GetPreviousProductsSuccess({
                  products: products,
                })
            ),
            catchError((err) =>
              of(new prodActions.GetPreviousProductsFailure({ error: err }))
            )
          );
      })
    );
  });

  public addProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType<prodActions.AddProduct>(
        prodActions.ProductActionTypes.ADD_PRODUCTS
      ),
      mergeMap((action: prodActions.AddProduct) => {
        return this.prodService
          .createNewProduct(action.payload.product)
          .then(() => {
            this.snackBar.open('Added Successfully', '', { duration: 2000 });
            return new prodActions.AddProductSuccess();
          })
          .catch((err) => {
            this.snackBar.open('Something Went Wrong!', '', { duration: 2000 });
            return new prodActions.AddProductFailure({ error: err });
          });
      })
    );
  });

  public updateProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType<prodActions.UpdateProduct>(
        prodActions.ProductActionTypes.UPDATE_PRODUCTS
      ),
      mergeMap((action: prodActions.UpdateProduct) => {
        return this.prodService
          .updateProduct(action.payload.product)
          .then(() => {
            this.snackBar.open('Updated Successfully', '', { duration: 2000 });
            return new prodActions.UpdateProductSuccess();
          })
          .catch((err) => {
            this.snackBar.open('Something Went Wrong!', '', { duration: 2000 });
            return new prodActions.UpdateProductFailure({ error: err });
          });
      })
    );
  });

  public deleteProduct$ = createEffect(() => {
    return this.action$.pipe(
      ofType<prodActions.DeleteProduct>(
        prodActions.ProductActionTypes.DELETE_PRODUCTS
      ),
      mergeMap((action: prodActions.DeleteProduct) => {
        return this.prodService
          .deleteProduct(action.payload.product)
          .then(() => {
            this.snackBar.open('Deleted Successfully', '', { duration: 2000 });
            return new prodActions.DeleteProductSuccess();
          })
          .catch((err) => {
            this.snackBar.open('Something Went Wrong!', '', { duration: 2000 });
            return new prodActions.DeleteProductFailure({ error: err });
          });
      })
    );
  });
}
