import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as subCategoryReducer from './subCategory.reducers';

const subCategoryFeatureSelector = createFeatureSelector<
  subCategoryReducer.SubCategoryState
>('subCategory');

export const getSubCategories = createSelector(
  subCategoryFeatureSelector,
  subCategoryReducer.subCategoryAdapter.getSelectors().selectAll
);

export const getMainCategory = createSelector(
  subCategoryFeatureSelector,
  (state: subCategoryReducer.SubCategoryState) => state.mainCategory
);

export const getLoading = createSelector(
  subCategoryFeatureSelector,
  (state: subCategoryReducer.SubCategoryState) => state.loading
);

export const getError = createSelector(
  subCategoryFeatureSelector,
  (state: subCategoryReducer.SubCategoryState) => state.error
);
