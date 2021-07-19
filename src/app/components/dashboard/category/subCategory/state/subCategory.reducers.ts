import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CategoryModel } from './../../models/category.model';
import * as subsubCategoryAction from './subCategory.actions';
import * as fromRoot from './../../../../../state/app.state';

export interface SubCategoryState extends EntityState<CategoryModel> {
  mainCategory: CategoryModel | null;
  loading: boolean;
  error: string | null;
}

export interface AppState extends fromRoot.AppState {
  subCategory: SubCategoryState;
}

export const subCategoryAdapter: EntityAdapter<CategoryModel> =
  createEntityAdapter<CategoryModel>();

const defaultState: SubCategoryState = {
  ids: [],
  entities: {},
  loading: false,
  mainCategory: null,
  error: null,
};

const initialState: SubCategoryState =
  subCategoryAdapter.getInitialState(defaultState);

export function subCategoryReducer(
  state: SubCategoryState = initialState,
  action: subsubCategoryAction.SubCategoryActions
) {
  switch (action.type) {
    case subsubCategoryAction.SubCategoryActionType.GET_MAIN_CATEGORY: {
      return {
        ...state,
        mainCategory: action.payload.mainCategory,
      };
    }
    case subsubCategoryAction.SubCategoryActionType.GET_SUB_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case subsubCategoryAction.SubCategoryActionType.GET_SUB_CATEGORY_SUCCESS: {
      return subCategoryAdapter.setAll(action.payload.subCategories, {
        ...state,
        loading: false,
      });
    }
    case subsubCategoryAction.SubCategoryActionType.GET_SUB_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case subsubCategoryAction.SubCategoryActionType.ADD_SUB_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case subsubCategoryAction.SubCategoryActionType.ADD_SUB_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case subsubCategoryAction.SubCategoryActionType.ADD_SUB_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case subsubCategoryAction.SubCategoryActionType.UPDATE_SUB_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case subsubCategoryAction.SubCategoryActionType
      .UPDATE_SUB_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case subsubCategoryAction.SubCategoryActionType
      .UPDATE_SUB_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    case subsubCategoryAction.SubCategoryActionType.DELETE_SUB_CATEGORY: {
      return {
        ...state,
        loading: true,
      };
    }
    case subsubCategoryAction.SubCategoryActionType
      .DELETE_SUB_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case subsubCategoryAction.SubCategoryActionType
      .DELETE_SUB_CATEGORY_FAILURE: {
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
