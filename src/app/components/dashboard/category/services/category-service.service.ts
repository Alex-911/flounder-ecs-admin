import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  constructor(private firestore: AngularFirestore) {}

  getMainCategory(): Observable<CategoryModel[]> {
    return this.firestore
      .collection<CategoryModel>('prod_category')
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((doc) => {
            const category = doc.payload.doc;
            return {
              id: category.id,
              title: category.data().title,
              image: category.data().image,
            } as CategoryModel;
          });
        })
      );
  }

  async addCategory(category: CategoryModel): Promise<boolean> {
    try {
      await this.firestore.collection('prod_category').doc(category.id).set({
        title: category.title,
        image: category.image,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async updateCategory(category: CategoryModel): Promise<boolean> {
    try {
      await this.firestore.collection('prod_category').doc(category.id).update({
        title: category.title,
        image: category.image,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async deleteCategory(category: CategoryModel): Promise<boolean> {
    try {
      await this.firestore
        .collection('prod_category')
        .doc(category.id)
        .delete();
      return true;
    } catch (error) {
      return false;
    }
  }
}
