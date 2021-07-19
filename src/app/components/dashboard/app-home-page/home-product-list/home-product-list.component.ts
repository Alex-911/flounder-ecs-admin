import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddEditHomeProductComponent } from '../add-edit-home-product/add-edit-home-product.component';
import { HomeProductModel } from '../models/homeProduct.model';
import * as homeActions from './../state/appHome.actions';
import * as homeReducer from './../state/appHome.reducers';
import * as homeSelector from './../state/appHome.selectors';

@Component({
  selector: 'app-home-product-list',
  templateUrl: './home-product-list.component.html',
  styleUrls: ['./home-product-list.component.scss'],
})
export class HomeProductListComponent implements OnInit {
  products!: Observable<HomeProductModel[]>;

  selectedProduct!: HomeProductModel;

  constructor(
    private store: Store<homeReducer.AppHomeState>,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new homeActions.GetAppHomeProducts());
    this.products = this.store.pipe(select(homeSelector.getHomeProducts));
  }

  edit(product: HomeProductModel) {
    this.matDialog.open(AddEditHomeProductComponent, {
      data: { product: product, editing: true },
    });
  }

  add() {
    this.matDialog.open(AddEditHomeProductComponent, {
      data: { product: null, editing: false },
    });
  }

  selectProd(product: HomeProductModel) {
    console.log(product);

    this.selectedProduct = product;
  }

  deleteProduct(product: HomeProductModel) {
    this.store.dispatch(new homeActions.DeleteAppHomeProducts({ product }));
  }
}
