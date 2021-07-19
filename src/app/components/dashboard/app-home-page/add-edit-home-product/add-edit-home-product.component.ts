import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from '../../product-manager/models/product.model';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { HomeProductModel } from '../models/homeProduct.model';
import { ListProductModel } from '../models/listProd.model';
import {
  AddAppHomeProducts,
  UpdateAppHomeProducts,
} from '../state/appHome.actions';
import { AppHomeState } from '../state/appHome.reducers';

@Component({
  selector: 'app-add-edit-home-product',
  templateUrl: './add-edit-home-product.component.html',
  styleUrls: ['./add-edit-home-product.component.scss'],
})
export class AddEditHomeProductComponent implements OnInit {
  public productForm!: FormGroup;
  public fetchedProducts!: Observable<ProductModel[]>;
  public selectedProducts: ListProductModel[] = [];

  selectedType!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      product: HomeProductModel;
      editing: boolean;
    },
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private store: Store<AppHomeState>
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: [this.data?.product?.title, [Validators.required]],
      type: [this.data?.product?.type, [Validators.required]],
    });
    if (this.data.editing) {
      this.selectedProducts = [...this.data.product.products];
      this.selectedType = this.data.product.type;
    }
  }

  compareFunction = (o1: any, o2: any) => o1.id === o2.id;

  select(product: ListProductModel) {
    console.log(product);
  }

  addProduct() {
    const productRef = this.matDialog.open(AddProductDialogComponent);
    productRef.afterClosed().subscribe((res: ProductModel[]) => {
      res.forEach((prod) => {
        const newProd: ListProductModel = {
          brand: prod.brand,
          id: prod.id,
          image: prod.graphicsImage,
          mrp: parseFloat(prod?.mrp.toString()),
          price: parseFloat(prod?.mrp.toString()),
          productId: prod.id,
          title: prod.title,
          varient: prod.varient,
        };
        this.selectedProducts.push(newProd);
      });
    });
  }

  removeProduct(product: ListProductModel) {
    this.selectedProducts.splice(
      this.selectedProducts.findIndex((prod) => prod === product),
      1
    );
    console.log(this.selectedProducts);
  }

  createHomeProduct() {
    if (this.selectedProducts.length >= 1) {
      const title: string = this.productForm.get('title')!.value;
      const type: string = this.productForm.get('type')!.value;
      const newProd: HomeProductModel = {
        id: 'newProd',
        title: title,
        type: type,
        products: this.selectedProducts,
      };
      this.store.dispatch(new AddAppHomeProducts({ product: newProd }));
    }
  }

  updateHomeProduct() {
    if (this.selectedProducts.length >= 1) {
      const title: string = this.productForm.get('title')!.value;
      const newProd: HomeProductModel = {
        id: this.data.product.id,
        title: title,
        type: this.selectedType,
        products: this.selectedProducts,
      };
      console.log(newProd);

      this.store.dispatch(new UpdateAppHomeProducts({ product: newProd }));
    }
  }
}
