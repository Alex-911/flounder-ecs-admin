import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { finalize, tap } from 'rxjs/operators';
import { ProductModel } from '../models/product.model';
import * as prodReducer from './../state/product-manager.reducers';
import * as prodAction from './../state/product-manager.actions';
import { CategoryModel } from '../../category/models/category.model';
import { CategoryState } from '../../category/state/category.reducers';
import { SubCategoryState } from '../../category/subCategory/state/subCategory.reducers';
import { getCategories } from '../../category/state/category.selectors';
import { GetCategory } from '../../category/state/category.actions';
import { GetSubCategory } from '../../category/subCategory/state/subCategory.actions';
import { getSubCategories } from '../../category/subCategory/state/subCategory.selectors';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
  public productForm!: FormGroup;

  public photoUrls!: string[];
  public image!: string;

  public categories!: Observable<CategoryModel[]>;
  public subCategories!: Observable<CategoryModel[]>;

  public localCategories: CategoryModel[] = [];
  public localSubCategories: CategoryModel[] = [];

  public categoryId!: string;
  public subCategoryId!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      product: ProductModel;
      editing: boolean;
    },
    private fb: FormBuilder,
    private store: Store<prodReducer.ProductManagerState>,
    private categoryStore: Store<CategoryState>,
    private subCategoryStore: Store<SubCategoryState>
  ) {}

  ngOnInit(): void {
    this.categoryStore.dispatch(new GetCategory());
    this.productForm = this.fb.group({
      title: [this.data.product?.title, [Validators.required]],
      brand: [this.data.product?.brand, [Validators.required]],
      category: [this.data.product?.categoryId, [Validators.required]],
      subCategory: [this.data.product?.subCategoryId, [Validators.required]],
      varient: [this.data.product?.varient, [Validators.required]],
      description: [this.data.product?.description, [Validators.required]],
      mrp: [this.data.product?.mrp, [Validators.required]],
      price: [this.data.product?.price, [Validators.required]],
      stock: [this.data.product?.stock, [Validators.required]],
      searchKey: [this.data.product?.searchKey, [Validators.required]],
    });

    this.subCategoryId = this.data.product.subCategoryId;
    this.categoryId = this.data.product.categoryId;

    this.categories = this.categoryStore.pipe(select(getCategories));
    this.categories.subscribe((doc) => {
      return doc.map((cate) => this.localCategories.push(cate));
    });
  }

  calDiscount() {
    const mrp: number = this.productForm.get('mrp')!.value as number;
    const price: number = this.productForm.get('price')!.value as number;

    const discount = 100 - (price / mrp) * 100;

    this.productForm.patchValue({
      discount: discount,
    });
  }

  addNewProduct() {
    console.log(this.productForm.value);

    if (this.productForm.valid) {
      const title: string = this.productForm.get('title')!.value;
      const brand: string = this.productForm.get('brand')!.value;

      const varient: string = this.productForm.get('varient')!.value;
      const description: string = this.productForm.get('description')!.value;
      const mrp: number = this.productForm.get('mrp')!.value;
      const price: number = this.productForm.get('price')!.value;
      const stock: number = this.productForm.get('stock')!.value;
      const searchKey: string = this.productForm.get('searchKey')!.value;

      let sKey: string[] = [];
      searchKey.split(',').forEach((val) => sKey.push(val));

      const newProd: ProductModel = {
        id: '',
        title: title,
        brand: brand,
        categoryId: this.categoryId,
        subCategoryId: this.subCategoryId,
        varient: varient,
        description: description,
        mrp: mrp,
        price: price,
        stock: stock,
        searchKey: sKey,
        users: ['none'],
        graphicsImage: '',
        images: [],
      };
      console.log(this.productForm.value);

      this.store.dispatch(new prodAction.AddProduct({ product: newProd }));
    } else {
      console.log('invalid');
    }
  }

  updateProduct() {
    console.log(this.productForm.value);

    if (this.productForm.valid) {
      const title: string = this.productForm.get('title')!.value;
      const brand: string = this.productForm.get('brand')!.value;

      const varient: string = this.productForm.get('varient')!.value;
      const description: string = this.productForm.get('description')!.value;
      const mrp: number = this.productForm.get('mrp')!.value;
      const price: number = this.productForm.get('price')!.value;
      const stock: number = this.productForm.get('stock')!.value;
      const searchKey: string = this.productForm.get('searchKey')!.value;

      let sKey: string[] = [];
      searchKey
        .toString()
        ?.split(',')
        .forEach((val) => sKey.push(val));

      const updatedImage: string =
        this.image !== null ? this.image : this.data.product.graphicsImage;
      const updatedImageUrls: string[] =
        this.photoUrls !== null ? this.photoUrls : this.data.product.images;

      const newProd: ProductModel = {
        id: this.data.product.id,
        title: title,
        brand: brand,
        categoryId: this.categoryId,
        subCategoryId: this.subCategoryId,
        varient: varient,
        description: description,
        mrp: mrp,
        price: price,
        stock: stock,
        searchKey: sKey,
        users: this.data.product.users,
        graphicsImage: updatedImage ?? this.data.product.graphicsImage,
        images: updatedImageUrls ?? this.data.product.images,
      };
      console.log(newProd);

      this.store.dispatch(new prodAction.UpdateProduct({ product: newProd }));
    } else {
      console.log('invalid');
    }
  }

  loadSubCategory(categoryId: string) {
    console.log(categoryId);
    let category!: CategoryModel;
    this.localCategories.map((doc) => {
      if (doc.id === categoryId) {
        category = doc;
      }
    });
    console.log(category);
    this.subCategoryStore.dispatch(
      new GetSubCategory({ mainCategory: category })
    );
    this.subCategories = this.subCategoryStore.pipe(select(getSubCategories));
    this.subCategories.subscribe((doc) => {
      console.log(doc);
      return doc.map((cate) => this.localSubCategories.push(cate));
    });
  }
}
