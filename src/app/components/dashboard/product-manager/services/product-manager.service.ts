import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductManagerService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  public getProducts(): Observable<ProductModel[]> {
    return this.firestore
      .collection<ProductModel>('prod_products', (ref) =>
        ref.orderBy('title', 'asc').limit(9)
      )
      .snapshotChanges()
      .pipe(
        map((querySnap) => {
          return querySnap.map((docSnap) => {
            const product = docSnap.payload.doc;
            return { ...product.data(), id: product.id };
          });
        })
      );
  }

  public getNextProduct(lastProduct: ProductModel): Observable<ProductModel[]> {
    return this.firestore
      .collection<ProductModel>('prod_products', (ref) =>
        ref.orderBy('title', 'asc').startAfter(lastProduct.title).limit(9)
      )
      .snapshotChanges()
      .pipe(
        map((querySnap) => {
          return querySnap.map((doc) => {
            const product = doc.payload.doc;
            return { ...product.data(), id: product.id };
          });
        })
      );
  }

  public getPreviousProducts(
    firstProduct: ProductModel
  ): Observable<ProductModel[]> {
    return this.firestore
      .collection<ProductModel>('prod_products', (ref) =>
        ref.orderBy('title', 'asc').endBefore(firstProduct.title).limitToLast(9)
      )
      .snapshotChanges()
      .pipe(
        map((querySnap) => {
          return querySnap.map((doc) => {
            const product = doc.payload.doc;
            return { ...product.data(), id: product.id };
          });
        })
      );
  }

  public async createNewProduct(product: ProductModel): Promise<any> {
    try {
      await this.firestore.collection('prod_products').add(product);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async updateProduct(product: ProductModel): Promise<any> {
    try {
      this.firestore.firestore.runTransaction(async (t) => {
        const productRef = this.firestore
          .collection('prod_products')
          .doc(product.id).ref;

        const prevProductData = await t.get(productRef);

        if (prevProductData.id === product.id) {
          t.update(productRef, {
            brand: product?.brand,
            categoryId: product?.categoryId,
            description: product?.description,
            users: product?.users,
            images: product?.images,
            mrp: product?.mrp,
            graphicsImage: product?.graphicsImage,
            price: product?.price,
            searchKey: product?.searchKey,
            stock: product?.stock,
            subCategoryId: product?.subCategoryId,
            title: product?.title,
            varient: product?.varient,
          });
        }
      });
    } catch (error) {
      return null;
    }
  }

  public async deleteProduct(product: ProductModel): Promise<any> {
    try {
      this.firestore.firestore.runTransaction(async (t) => {
        const productRef = this.firestore
          .collection('prod_products')
          .doc(product.id).ref;

        const prevProductData = await t.get(productRef);

        console.log(prevProductData.id);

        if (product.id === prevProductData.id) {
          await t.delete(productRef);
        }
      });
    } catch (error) {
      return null;
    }
  }

  public searchProduct(title: string): Observable<ProductModel[]> {
    return this.firestore
      .collection<ProductModel>('prod_products', (ref) =>
        ref.where('searchKey', 'array-contains-any', [title])
      )
      .snapshotChanges()
      .pipe(
        map((querySnap) => {
          return querySnap.map((docSnap) => {
            const product = docSnap.payload.doc;
            return {
              ...product.data(),
              id: product.id,
            };
          });
        })
      );
  }
}
