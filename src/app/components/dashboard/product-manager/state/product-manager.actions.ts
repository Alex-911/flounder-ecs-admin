import { Action } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export enum ProductActionTypes {
  GET_PRODUCTS = '[PRODUCT MANAGER] GET PRODUCTS',
  GET_PRODUCTS_SUCCESS = '[PRODUCT MANAGER] GET PRODUCTS SUCCESS',
  GET_PRODUCTS_FAILURE = '[PRODUCT MANAGER] GET PRODUCTS FAILURE',

  GET_NEXT_PRODUCTS = '[PRODUCT MANAGER] GET NEXT PRODUCTS',
  GET_NEXT_PRODUCTS_SUCCESS = '[PRODUCT MANAGER] GET NEXT PRODUCTS SUCCESS',
  GET_NEXT_PRODUCTS_FAILURE = '[PRODUCT MANAGER] GET NEXT PRODUCTS FAILURE',

  GET_PREVIOUS_PRODUCTS = '[PRODUCT MANAGER] GET PREVIOUS PRODUCTS',
  GET_PREVIOUS_PRODUCTS_SUCCESS = '[PRODUCT MANAGER] GET PREVIOUS PRODUCTS SUCCESS',
  GET_PREVIOUS_PRODUCTS_FAILURE = '[PRODUCT MANAGER] GET PREVIOUS PRODUCTS FAILURE',

  ADD_PRODUCTS = '[PRODUCT MANAGER] ADD PRODUCTS',
  ADD_PRODUCTS_SUCCESS = '[PRODUCT MANAGER] ADD PRODUCTS SUCCESS',
  ADD_PRODUCTS_FAILURE = '[PRODUCT MANAGER] ADD PRODUCTS FAILURE',

  UPDATE_PRODUCTS = '[PRODUCT MANAGER] UPDATE PRODUCTS',
  UPDATE_PRODUCTS_SUCCESS = '[PRODUCT MANAGER] UPDATE PRODUCTS SUCCESS',
  UPDATE_PRODUCTS_FAILURE = '[PRODUCT MANAGER] UPDATE PRODUCTS FAILURE',

  DELETE_PRODUCTS = '[PRODUCT MANAGER] DELETE PRODUCTS',
  DELETE_PRODUCTS_SUCCESS = '[PRODUCT MANAGER] DELETE PRODUCTS SUCCESS',
  DELETE_PRODUCTS_FAILURE = '[PRODUCT MANAGER] DELETE PRODUCTS FAILURE',
}

export class GetProducts implements Action {
  readonly type = ProductActionTypes.GET_PRODUCTS;
  constructor() {}
}

export class GetProductsSuccess implements Action {
  readonly type = ProductActionTypes.GET_PRODUCTS_SUCCESS;
  constructor(
    public payload: {
      products: ProductModel[];
    }
  ) {}
}
export class GetProductsFailure implements Action {
  readonly type = ProductActionTypes.GET_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class GetNextProducts implements Action {
  readonly type = ProductActionTypes.GET_NEXT_PRODUCTS;
  constructor(
    public payload: {
      lastProduct: ProductModel;
    }
  ) {}
}

export class GetNextProductsSuccess implements Action {
  readonly type = ProductActionTypes.GET_NEXT_PRODUCTS_SUCCESS;
  constructor(
    public payload: {
      products: ProductModel[];
    }
  ) {}
}
export class GetNextProductsFailure implements Action {
  readonly type = ProductActionTypes.GET_NEXT_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class GetPreviousProducts implements Action {
  readonly type = ProductActionTypes.GET_PREVIOUS_PRODUCTS;
  constructor(
    public payload: {
      firstProduct: ProductModel;
    }
  ) {}
}

export class GetPreviousProductsSuccess implements Action {
  readonly type = ProductActionTypes.GET_PREVIOUS_PRODUCTS_SUCCESS;
  constructor(
    public payload: {
      products: ProductModel[];
    }
  ) {}
}
export class GetPreviousProductsFailure implements Action {
  readonly type = ProductActionTypes.GET_PREVIOUS_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCTS;
  constructor(
    public payload: {
      product: ProductModel;
    }
  ) {}
}

export class AddProductSuccess implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCTS_SUCCESS;
  constructor() {}
}

export class AddProductFailure implements Action {
  readonly type = ProductActionTypes.ADD_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCTS;
  constructor(
    public payload: {
      product: ProductModel;
    }
  ) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCTS_SUCCESS;
  constructor() {}
}

export class UpdateProductFailure implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCTS;
  constructor(
    public payload: {
      product: ProductModel;
    }
  ) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCTS_SUCCESS;
  constructor() {}
}

export class DeleteProductFailure implements Action {
  readonly type = ProductActionTypes.DELETE_PRODUCTS_FAILURE;
  constructor(
    public payload: {
      error: string;
    }
  ) {}
}

export type ProductManagerActions =
  | GetProducts
  | GetProductsSuccess
  | GetProductsFailure
  | GetNextProducts
  | GetNextProductsSuccess
  | GetNextProductsFailure
  | GetPreviousProducts
  | GetPreviousProductsSuccess
  | GetPreviousProductsFailure
  | AddProduct
  | AddProductSuccess
  | AddProductFailure
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFailure
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFailure;
