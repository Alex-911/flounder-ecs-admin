import { Action } from '@ngrx/store';
import { CustomerModel } from '../model/customer.model';

export enum CustomerActionTypes {
  GET_CUSTOMER = '[CUSTOMER MANAGER] GET CUSTOMER',
  GET_CUSTOMER_SUCCESS = '[CUSTOMER MANAGER] GET CUSTOMER SUCCESS',
  GET_CUSTOMER_FAILURE = '[CUSTOMER MANAGER] GET CUSTOMER FAILURE',
}

export class GetCustomer implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMER;
}
export class GetCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMER_SUCCESS;
  constructor(
    public payload: {
      customers: CustomerModel[];
    }
  ) {}
}
export class GetCustomerFailure implements Action {
  readonly type = CustomerActionTypes.GET_CUSTOMER_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type CustomerAction =
  | GetCustomer
  | GetCustomerSuccess
  | GetCustomerFailure;
