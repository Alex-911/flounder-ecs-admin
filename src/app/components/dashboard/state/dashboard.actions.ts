import { Action } from '@ngrx/store';
import { DashboardModel } from '../models/dashboard.model';

export enum DashboardActionTypes {
  GET_DATA = '[DASHBOARD] GET DATA',
  GET_DATA_SUCCESS = '[DASHBOARD] GET DATA SUCCESS',
  GET_DATA_FAILURE = '[DASHBOARD] GET DATA FAILURE',
}

export class GetData implements Action {
  readonly type = DashboardActionTypes.GET_DATA;
}

export class GetDataSuccess implements Action {
  readonly type = DashboardActionTypes.GET_DATA_SUCCESS;
  constructor(
    public payload: {
      data: DashboardModel;
    }
  ) {}
}

export class GetDataFailure implements Action {
  readonly type = DashboardActionTypes.GET_DATA_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type DashboardAction = GetData | GetDataSuccess | GetDataFailure;
