import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as custReducers from './customers.reducers';

const customerFeatureSelector = createFeatureSelector<
  custReducers.CustomerState
>('customers');

export const getCustomers = createSelector(
  customerFeatureSelector,
  custReducers.customerAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  customerFeatureSelector,
  (state: custReducers.CustomerState) => state.loading
);
export const getError = createSelector(
  customerFeatureSelector,
  (state: custReducers.CustomerState) => state.error
);
