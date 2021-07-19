import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const getUser = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.user
);
export const getLoading = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.loading
);
export const getError = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.error
);
