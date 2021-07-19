import { Action } from '@ngrx/store';
import { CategoryModel } from '../models/category.model';

export enum CategoryActionType {
  GET_CATEGORY = '[CATEGORY] GET CATEGORY',
  GET_CATEGORY_SUCCESS = '[CATEGORY] GET CATEGORY SUCCESS',
  GET_CATEGORY_FAILURE = '[CATEGORY] GET CATEGORY FAILURE',

  ADD_CATEGORY = '[CATEGORY] ADD CATEGORY',
  ADD_CATEGORY_SUCCESS = '[CATEGORY] ADD CATEGORY SUCCESS',
  ADD_CATEGORY_FAILURE = '[CATEGORY] ADD CATEGORY FAILURE',

  UPDATE_CATEGORY = '[CATEGORY] UPDATE CATEGORY',
  UPDATE_CATEGORY_SUCCESS = '[CATEGORY] UPDATE CATEGORY SUCCESS',
  UPDATE_CATEGORY_FAILURE = '[CATEGORY] UPDATE CATEGORY FAILURE',

  DELETE_CATEGORY = '[CATEGORY] DELETE CATEGORY',
  DELETE_CATEGORY_SUCCESS = '[CATEGORY] DELETE CATEGORY SUCCESS',
  DELETE_CATEGORY_FAILURE = '[CATEGORY] DELETE CATEGORY FAILURE',
}

export class GetCategory implements Action {
  readonly type = CategoryActionType.GET_CATEGORY;
}
export class GetCategorySuccess implements Action {
  readonly type = CategoryActionType.GET_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      categories: CategoryModel[];
    }
  ) {}
}
export class GetCategoryFailure implements Action {
  readonly type = CategoryActionType.GET_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class ADDCategory implements Action {
  readonly type = CategoryActionType.ADD_CATEGORY;
  constructor(
    public payload: {
      category: CategoryModel;
    }
  ) {}
}
export class ADDCategorySuccess implements Action {
  readonly type = CategoryActionType.ADD_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class ADDCategoryFailure implements Action {
  readonly type = CategoryActionType.ADD_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class UPDATECategory implements Action {
  readonly type = CategoryActionType.UPDATE_CATEGORY;
  constructor(
    public payload: {
      category: CategoryModel;
    }
  ) {}
}
export class UPDATECategorySuccess implements Action {
  readonly type = CategoryActionType.UPDATE_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class UPDATECategoryFailure implements Action {
  readonly type = CategoryActionType.UPDATE_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class DELETECategory implements Action {
  readonly type = CategoryActionType.DELETE_CATEGORY;
  constructor(
    public payload: {
      category: CategoryModel;
    }
  ) {}
}
export class DELETECategorySuccess implements Action {
  readonly type = CategoryActionType.DELETE_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class DELETECategoryFailure implements Action {
  readonly type = CategoryActionType.DELETE_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type CategoryActions =
  | GetCategory
  | GetCategorySuccess
  | GetCategoryFailure
  | ADDCategory
  | ADDCategorySuccess
  | ADDCategoryFailure
  | UPDATECategory
  | UPDATECategorySuccess
  | UPDATECategoryFailure
  | DELETECategory
  | DELETECategoryFailure
  | DELETECategorySuccess;
