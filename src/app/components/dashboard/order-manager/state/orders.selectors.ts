import { createFeatureSelector, createSelector } from '@ngrx/store';
import { orderAdapter, OrderManagerState } from './orders.reducers';

const orderFeatureSelector = createFeatureSelector<OrderManagerState>('orders');

export const getOrders = createSelector(
  orderFeatureSelector,
  orderAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  orderFeatureSelector,
  (state: OrderManagerState) => state.loading
);
export const getError = createSelector(
  orderFeatureSelector,
  (state: OrderManagerState) => state.error
);
