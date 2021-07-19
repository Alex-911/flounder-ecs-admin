import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { ProductModel } from '../models/product.model';
import { ProductManagerService } from '../services/product-manager.service';

import * as prodActions from './../state/product-manager.actions';
import * as prodReducer from './../state/product-manager.reducers';
import * as prodSelectors from './../state/product-manager.selectors';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss'],
})
export class ProductHomeComponent implements OnInit {
  public products!: Observable<ProductModel[]>;
  public searchProducts!: Observable<ProductModel[]>;
  public loading!: Observable<boolean>;
  public pageCount: number = 0;
  public listProds!: ProductModel[];

  public searching: boolean = false;
  lastKeyPress: number = 0;

  constructor(
    private store: Store<prodReducer.ProductManagerState>,
    private dialog: MatDialog,
    private prodService: ProductManagerService
  ) {}

  ngOnInit(): void {
    this.loading = this.store.pipe(select(prodSelectors.getLoading));
    this.store.dispatch(new prodActions.GetProducts());
    this.products = this.store.pipe(select(prodSelectors.getProducts));
    this.products.subscribe((prods) => (this.listProds = prods));
  }

  edit(product: ProductModel): void {
    console.log(product.id);

    this.dialog.open(AddEditProductComponent, {
      data: { product: product, editing: true },
    });
  }

  delete(product: ProductModel): void {
    this.store.dispatch(new prodActions.DeleteProduct({ product: product }));
  }

  add(): void {
    this.dialog.open(AddEditProductComponent, {
      data: { product: null, editing: false },
      disableClose: true,
    });
  }

  getNext(): void {
    if (this.listProds[this.listProds.length - 1] !== null) {
      this.store.dispatch(
        new prodActions.GetNextProducts({
          lastProduct: this.listProds[this.listProds.length - 1],
        })
      );
    }
    this.pageCount += 1;
  }

  getPrevious(): void {
    if (this.listProds[0] !== null && this.pageCount >= 1) {
      this.store.dispatch(
        new prodActions.GetPreviousProducts({ firstProduct: this.listProds[0] })
      );
    }
    this.pageCount -= 1;
  }

  search(query: any): void {
    console.log((query.target.value as string).length);

    if (
      (query.target.value as string).length === 0 ||
      (query.target.value as string) === null
    ) {
      this.searching = false;
      this.store.dispatch(new prodActions.GetProducts());
      this.products = this.store.pipe(select(prodSelectors.getProducts));
    }
    if (
      query.timeStamp - this.lastKeyPress > 200 &&
      (query.target.value as string).length !== 0
    ) {
      this.searching = true;
      console.log(query.target.value);
      this.products = this.prodService.searchProduct(query.target.value);
      this.searchProducts.subscribe((prods) => {
        console.log(prods);
      });
    } else {
      this.store.dispatch(new prodActions.GetProducts());
      this.products = this.store.pipe(select(prodSelectors.getProducts));
    }
  }
}
