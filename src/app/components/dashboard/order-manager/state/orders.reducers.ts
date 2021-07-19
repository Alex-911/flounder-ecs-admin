import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { OrderModel } from '../models/order.model';
import * as orderActions from './orders.actions';
import * as fromRoot from './../../../../state/app.state';
export interface OrderManagerState extends EntityState<OrderModel> {
  loading: boolean;
  error: string | null;
}
export interface AppState extends fromRoot.AppState {
  orders: OrderManagerState;
}

export const orderAdapter: EntityAdapter<OrderModel> =
  createEntityAdapter<OrderModel>();

export const defaultState: OrderManagerState = {
  ids: [],
  entities: {},
  error: null,
  loading: false,
};

const initialState: OrderManagerState =
  orderAdapter.getInitialState(defaultState);

export function orderManagerReducer(
  state: OrderManagerState = initialState,
  action: orderActions.OrderActions
): OrderManagerState {
  switch (action.type) {
    case orderActions.OrderActionTypes.GET_ORDERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case orderActions.OrderActionTypes.GET_ORDERS_SUCCESS: {
      return orderAdapter.setAll(action.payload.orders, {
        ...state,
        loading: false,
      });
    }
    case orderActions.OrderActionTypes.GET_ORDERS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
