import { DashboardModel } from '../models/dashboard.model';
import * as fromRoot from './../../../state/app.state';
import * as dashboardActions from './dashboard.actions';

export interface DashboardState {
  data: DashboardModel | null;
  loading: boolean;
  error: string | null;
}

export interface AppState extends fromRoot.AppState {
  dashboard: DashboardState;
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
};

export function dashboardReducer(
  state: DashboardState = initialState,
  action: dashboardActions.DashboardAction
): DashboardState {
  switch (action.type) {
    case dashboardActions.DashboardActionTypes.GET_DATA: {
      return {
        ...state,
        loading: true,
      };
    }
    case dashboardActions.DashboardActionTypes.GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    }
    case dashboardActions.DashboardActionTypes.GET_DATA_FAILURE: {
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
