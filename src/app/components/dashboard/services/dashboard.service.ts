import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardModel } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private firestore: AngularFirestore) {}

  getDashboardDetails(): Observable<DashboardModel> {
    return this.firestore
      .collection('config')
      .doc<DashboardModel>('dashboardHome')
      .snapshotChanges()
      .pipe(
        map((doc) => {
          return {
            users: doc.payload.data()?.users,
            products: doc.payload.data()?.products,
            completedOrders: doc.payload.data()?.completedOrders,
            liveOrders: doc.payload.data()?.liveOrders,
          } as DashboardModel;
        })
      );
  }
}
