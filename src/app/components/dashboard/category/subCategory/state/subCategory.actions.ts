import { Action } from '@ngrx/store';
import { CategoryModel } from './../../models/category.model';

export enum SubCategoryActionType {
  GET_MAIN_CATEGORY = '[SUB_CATEGORY] GET MAIN_CATEGORY',

  GET_SUB_CATEGORY = '[SUB_CATEGORY] GET SUB_CATEGORY',
  GET_SUB_CATEGORY_SUCCESS = '[SUB_CATEGORY] GET SUB_CATEGORY SUCCESS',
  GET_SUB_CATEGORY_FAILURE = '[SUB_CATEGORY] GET SUB_CATEGORY FAILURE',

  ADD_SUB_CATEGORY = '[SUB_CATEGORY] ADD SUB_CATEGORY',
  ADD_SUB_CATEGORY_SUCCESS = '[SUB_CATEGORY] ADD SUB_CATEGORY SUCCESS',
  ADD_SUB_CATEGORY_FAILURE = '[SUB_CATEGORY] ADD SUB_CATEGORY FAILURE',

  UPDATE_SUB_CATEGORY = '[SUB_CATEGORY] UPDATE SUB_CATEGORY',
  UPDATE_SUB_CATEGORY_SUCCESS = '[SUB_CATEGORY] UPDATE SUB_CATEGORY SUCCESS',
  UPDATE_SUB_CATEGORY_FAILURE = '[SUB_CATEGORY] UPDATE SUB_CATEGORY FAILURE',

  DELETE_SUB_CATEGORY = '[SUB_CATEGORY] DELETE SUB_CATEGORY',
  DELETE_SUB_CATEGORY_SUCCESS = '[SUB_CATEGORY] DELETE SUB_CATEGORY SUCCESS',
  DELETE_SUB_CATEGORY_FAILURE = '[SUB_CATEGORY] DELETE SUB_CATEGORY FAILURE',
}

export class GetMAINCategory implements Action {
  readonly type = SubCategoryActionType.GET_MAIN_CATEGORY;
  constructor(
    public payload: {
      mainCategory: CategoryModel;
    }
  ) {}
}

export class GetSubCategory implements Action {
  readonly type = SubCategoryActionType.GET_SUB_CATEGORY;
  constructor(
    public payload: {
      mainCategory: CategoryModel;
    }
  ) {}
}

export class GetSubCategorySuccess implements Action {
  readonly type = SubCategoryActionType.GET_SUB_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      subCategories: CategoryModel[];
    }
  ) {}
}
export class GetSubCategoryFailure implements Action {
  readonly type = SubCategoryActionType.GET_SUB_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class UPDATESubCategory implements Action {
  readonly type = SubCategoryActionType.UPDATE_SUB_CATEGORY;
  constructor(
    public payload: {
      mainCategory: CategoryModel;
      subCategory: CategoryModel;
    }
  ) {}
}
export class UPDATESubCategorySuccess implements Action {
  readonly type = SubCategoryActionType.UPDATE_SUB_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class UPDATESubCategoryFailure implements Action {
  readonly type = SubCategoryActionType.UPDATE_SUB_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class DELETESubCategory implements Action {
  readonly type = SubCategoryActionType.DELETE_SUB_CATEGORY;
  constructor(
    public payload: {
      mainCategory: CategoryModel;
      subCategory: CategoryModel;
    }
  ) {}
}
export class DELETESubCategorySuccess implements Action {
  readonly type = SubCategoryActionType.DELETE_SUB_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class DELETESubCategoryFailure implements Action {
  readonly type = SubCategoryActionType.DELETE_SUB_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class ADDSubCategory implements Action {
  readonly type = SubCategoryActionType.ADD_SUB_CATEGORY;
  constructor(
    public payload: {
      mainCategory: CategoryModel;
      subCategory: CategoryModel;
    }
  ) {}
}
export class ADDSubCategorySuccess implements Action {
  readonly type = SubCategoryActionType.ADD_SUB_CATEGORY_SUCCESS;
  constructor(
    public payload: {
      result: boolean;
    }
  ) {}
}
export class ADDSubCategoryFailure implements Action {
  readonly type = SubCategoryActionType.ADD_SUB_CATEGORY_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type SubCategoryActions =
  | GetMAINCategory
  | GetSubCategory
  | GetSubCategoryFailure
  | GetSubCategorySuccess
  | ADDSubCategory
  | ADDSubCategorySuccess
  | ADDSubCategoryFailure
  | UPDATESubCategory
  | UPDATESubCategorySuccess
  | UPDATESubCategoryFailure
  | DELETESubCategory
  | DELETESubCategorySuccess
  | DELETESubCategoryFailure;
