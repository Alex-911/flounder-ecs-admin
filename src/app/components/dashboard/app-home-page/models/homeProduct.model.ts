import { ListProductModel } from './listProd.model';

export interface HomeProductModel {
  id: string;
  title: string;
  type: string;
  products: ListProductModel[];
}
