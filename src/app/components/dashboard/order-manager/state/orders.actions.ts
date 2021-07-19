import { Action } from '@ngrx/store';
import { OrderModel } from '../models/order.model';

export enum OrderActionTypes {
  GET_ORDERS = '[ORDER MANAGER] GET LIVE ORDERS',
  GET_ORDERS_SUCCESS = '[ORDER MANAGER] GET LIVE ORDERS SUCCESS',
  GET_ORDERS_FAILURE = '[ORDER MANAGER] GET LIVE ORDERS FAILURE',

  UPDATE_ORDERS = '[ORDER MANAGER] UPDATE ORDERS',
  UPDATE_ORDERS_SUCCESS = '[ORDER MANAGER] UPDATE ORDERS SUCCESS',
  UPDATE_ORDERS_FAILURE = '[ORDER MANAGER] UPDATE ORDERS FAILURE',
}

export class GetOrders implements Action {
  readonly type = OrderActionTypes.GET_ORDERS;
}
export class GetOrdersSuccess implements Action {
  readonly type = OrderActionTypes.GET_ORDERS_SUCCESS;
  constructor(
    public payload: {
      orders: OrderModel[];
    }
  ) {}
}
export class GetOrdersFailure implements Action {
  readonly type = OrderActionTypes.GET_ORDERS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class UPDATEOrders implements Action {
  readonly type = OrderActionTypes.UPDATE_ORDERS;
  constructor(
    public payload: {
      orders: OrderModel;
      status: string;
    }
  ) {}
}
export class UPDATEOrdersSuccess implements Action {
  readonly type = OrderActionTypes.UPDATE_ORDERS_SUCCESS;
}
export class UPDATEOrdersFailure implements Action {
  readonly type = OrderActionTypes.UPDATE_ORDERS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type OrderActions =
  | GetOrders
  | GetOrdersSuccess
  | GetOrdersFailure
  | UPDATEOrders
  | UPDATEOrdersSuccess
  | UPDATEOrdersFailure;
