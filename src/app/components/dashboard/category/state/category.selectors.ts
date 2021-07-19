import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as categoryReducer from './category.reducers';

const categoryFeatureSelector = createFeatureSelector<
  categoryReducer.CategoryState
>('category');

export const getCategories = createSelector(
  categoryFeatureSelector,
  categoryReducer.categoryAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  categoryFeatureSelector,
  (state: categoryReducer.CategoryState) => state.loading
);

export const getError = createSelector(
  categoryFeatureSelector,
  (state: categoryReducer.CategoryState) => state.error
);
