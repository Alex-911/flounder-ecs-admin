import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CustomerModel } from '../model/customer.model';
import * as custActions from './customers.actions';
import * as fromRoot from './../../../../state/app.state';

export interface CustomerState extends EntityState<CustomerModel> {
  loading: boolean;
  error: string | null;
}

export interface AppState extends fromRoot.AppState {
  customers: CustomerState;
}

export const customerAdapter: EntityAdapter<CustomerModel> =
  createEntityAdapter<CustomerModel>();

export const defaultState: CustomerState = {
  ids: [],
  entities: {},
  error: null,
  loading: false,
};

const initialState: CustomerState =
  customerAdapter.getInitialState(defaultState);

export function customerReducer(
  state: CustomerState = initialState,
  action: custActions.CustomerAction
): CustomerState {
  switch (action.type) {
    case custActions.CustomerActionTypes.GET_CUSTOMER: {
      return {
        ...state,
        loading: true,
      };
    }
    case custActions.CustomerActionTypes.GET_CUSTOMER_SUCCESS: {
      return customerAdapter.setAll(action.payload.customers, {
        ...state,
        loading: false,
      });
    }
    case custActions.CustomerActionTypes.GET_CUSTOMER_FAILURE: {
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
