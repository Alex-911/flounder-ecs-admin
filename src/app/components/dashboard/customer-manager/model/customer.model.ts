export interface CustomerModel {
  id: string;
  displayName: string;
  dob: string;
  email: string;
  phoneNumber: string;
  location: {};
  orders: {}[];
  cart: {}[];
  address: {}[];
}
