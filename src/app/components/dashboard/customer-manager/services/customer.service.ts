import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerModel } from '../model/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private firestore: AngularFirestore) {}

  public getCustomers(): Observable<CustomerModel[]> {
    return this.firestore
      .collection<CustomerModel>('users')
      .snapshotChanges()
      .pipe(
        map((querySnap) => {
          return querySnap.map((doc) => {
            const data = doc.payload.doc.data();
            return {
              address: data.address,
              cart: data.cart,
              displayName: data.displayName,
              dob: data.dob,
              email: data.email,
              id: doc.payload.doc.id,
              location: data.location,
              orders: data.orders,
              phoneNumber: data.phoneNumber,
            } as CustomerModel;
          });
        })
      );
  }
}
