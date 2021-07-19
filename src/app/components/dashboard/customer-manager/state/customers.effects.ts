import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CustomerService } from '../services/customer.service';
import * as custActions from './customers.actions';

@Injectable()
export class CustomerEffects {
  constructor(private custService: CustomerService, private action$: Actions) {}

  public getCustomer$ = createEffect(() => {
    return this.action$.pipe(
      ofType<custActions.GetCustomer>(
        custActions.CustomerActionTypes.GET_CUSTOMER
      ),
      mergeMap((action: custActions.GetCustomer) => {
        return this.custService.getCustomers().pipe(
          map(
            (cust) => new custActions.GetCustomerSuccess({ customers: cust })
          ),
          catchError((err) =>
            of(new custActions.GetCustomerFailure({ error: err }))
          )
        );
      })
    );
  });
}
