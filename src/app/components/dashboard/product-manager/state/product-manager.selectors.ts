import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as prodReducer from './product-manager.reducers';

const prodFeatureSelector = createFeatureSelector<
  prodReducer.ProductManagerState
>('product-manager');

export const getProducts = createSelector(
  prodFeatureSelector,
  prodReducer.productAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  prodFeatureSelector,
  (state: prodReducer.ProductManagerState) => state.loading
);
export const getErrorLoading = createSelector(
  prodFeatureSelector,
  (state: prodReducer.ProductManagerState) => state.error
);
