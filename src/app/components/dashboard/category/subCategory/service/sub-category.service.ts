import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryModel } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  constructor(private firestore: AngularFirestore) {}

  getSubCategories(category: CategoryModel): Observable<CategoryModel[]> {
    return this.firestore
      .collection('prod_category')
      .doc(category.id)
      .collection<CategoryModel>('sub_category')
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((doc) => {
            const subCategory = doc.payload.doc;
            return {
              ...subCategory.data(),
              id: subCategory.id,
            };
          });
        })
      );
  }

  async addCategory(
    maincategory: CategoryModel,
    subCategory: CategoryModel
  ): Promise<boolean> {
    try {
      await this.firestore
        .collection('prod_category')
        .doc(maincategory.id)
        .collection('sub_category')
        .doc(subCategory.id)
        .set({
          title: subCategory.title,
          image: subCategory.image,
        });
      return true;
    } catch (error) {
      return false;
    }
  }

  async updateCategory(
    maincategory: CategoryModel,
    subCategory: CategoryModel
  ): Promise<boolean> {
    try {
      await this.firestore
        .collection('prod_category')
        .doc(maincategory.id)
        .collection('sub_category')
        .doc(subCategory.id)
        .update({
          title: subCategory.title,
          image: subCategory.image,
        });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteCategory(
    maincategory: CategoryModel,
    subCategory: CategoryModel
  ): Promise<boolean> {
    try {
      await this.firestore
        .collection('prod_category')
        .doc(maincategory.id)
        .collection('sub_category')
        .doc(subCategory.id)
        .delete();
      return true;
    } catch (error) {
      return false;
    }
  }
}
