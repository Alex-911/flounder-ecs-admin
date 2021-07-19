import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeProductModel } from '../models/homeProduct.model';

@Injectable({
  providedIn: 'root',
})
export class AppHomeService {
  constructor(private firestore: AngularFirestore) {}

  getHomeProducts(): Observable<HomeProductModel[]> {
    return this.firestore
      .collection<HomeProductModel>('prod_home_page')
      .snapshotChanges()
      .pipe(
        map((querySnapShot) => {
          return querySnapShot.map((doc) => {
            const product = doc.payload.doc;
            return {
              ...product.data(),
              id: product.id,
            } as HomeProductModel;
          });
        })
      );
  }

  async addHomeProduct(product: HomeProductModel): Promise<boolean> {
    try {
      await this.firestore.collection('prod_home_page').add({
        ...product,
        serverTimeStamp:
          firebase.default.firestore.FieldValue.serverTimestamp(),
      });
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  async updateHomeProduct(product: HomeProductModel): Promise<boolean> {
    try {
      console.log(product);
      await this.firestore
        .collection('prod_home_page')
        .doc(product.id)
        .update({
          ...product,
          serverTimeStamp:
            firebase.default.firestore.FieldValue.serverTimestamp(),
        });
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  async deleteHomeProduct(product: HomeProductModel): Promise<boolean> {
    try {
      await this.firestore
        .collection('prod_home_page')
        .doc(product.id)
        .delete();
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}
