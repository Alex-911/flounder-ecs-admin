import { OrderAddressModel } from './orderAddressModel';
import { OrderProductModel } from './orderProducts.model';

export interface OrderModel {
  id: string;
  address: OrderAddressModel;
  products: OrderProductModel[];
  paymentId: string;
  status: string;
  totalPrice: string;
  userUid: string;
  createdAt: string;
  updatedAt: string;
}
