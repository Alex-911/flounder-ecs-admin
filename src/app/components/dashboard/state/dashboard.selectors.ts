import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './dashboard.reducers';
import { DashboardState } from './dashboard.reducers';

const dashboardFeatureSelector = createFeatureSelector<DashboardState>('dashboard');

export const getData = createSelector(
  dashboardFeatureSelector,
  (state: DashboardState) => state.data
);
export const getLoading = createSelector(
  dashboardFeatureSelector,
  (state: DashboardState) => state.loading
);
export const getError = createSelector(
  dashboardFeatureSelector,
  (state: DashboardState) => state.error
);
