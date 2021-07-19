import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as homeReducers from './appHome.reducers';

const appHomeFeatureSelector = createFeatureSelector<homeReducers.AppHomeState>(
  'appHomePage'
);

export const getHomeProducts = createSelector(
  appHomeFeatureSelector,
  homeReducers.appHomeAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  appHomeFeatureSelector,
  (state: homeReducers.AppHomeState) => state.loading
);

export const getError = createSelector(
  appHomeFeatureSelector,
  (state: homeReducers.AppHomeState) => state.error
);
