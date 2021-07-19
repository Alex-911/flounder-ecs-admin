import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private firestore: AngularFirestore) {}

  public getOrders(): Observable<OrderModel[]> {
    return this.firestore
      .collection<OrderModel>('prod_orders')
      .snapshotChanges()
      .pipe(
        map((querySnap) => {
          return querySnap.map((doc) => {
            return {
              ...doc.payload.doc.data(),
              id: doc.payload.doc.id,
            };
          });
        })
      );
  }

  public async updateOrder(
    order: OrderModel,
    updatesStatus: string
  ): Promise<boolean> {
    try {
      await this.firestore
        .collection('prod_orders')
        .doc(order.id)
        .update({
          ...order,
          status: updatesStatus,
        });
      return true;
    } catch (error) {
      return false;
    }
  }
}
