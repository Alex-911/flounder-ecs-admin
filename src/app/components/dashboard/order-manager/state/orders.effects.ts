import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OrdersService } from '../services/orders.service';
import * as orderAction from './orders.actions';

@Injectable()
export class OrdersEffects {
  constructor(private action$: Actions, private orderService: OrdersService) {}

  public getLiveOrder$ = createEffect(() => {
    return this.action$.pipe(
      ofType<orderAction.GetOrders>(orderAction.OrderActionTypes.GET_ORDERS),
      mergeMap((action: orderAction.GetOrders) => {
        return this.orderService.getOrders().pipe(
          map((orders) => new orderAction.GetOrdersSuccess({ orders })),
          catchError((error) => of(new orderAction.GetOrdersFailure({ error })))
        );
      })
    );
  });

  public updateOrder$ = createEffect(() => {
    return this.action$.pipe(
      ofType<orderAction.UPDATEOrders>(
        orderAction.OrderActionTypes.UPDATE_ORDERS
      ),
      mergeMap(async (action: orderAction.UPDATEOrders) => {
        return this.orderService
          .updateOrder(action.payload.orders, action.payload.status)
          .then((res) => {
            if (res) {
              return new orderAction.UPDATEOrdersSuccess();
            } else {
              return new orderAction.UPDATEOrdersFailure({
                error: 'Update Failed',
              });
            }
          })
          .catch((e) => {
            return new orderAction.UPDATEOrdersFailure({
              error: `${e}`,
            });
          });
      })
    );
  });
}
