import { Component, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from '../../product-manager/models/product.model';
import { ProductManagerService } from '../../product-manager/services/product-manager.service';
import { ProductManagerState } from '../../product-manager/state/product-manager.reducers';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss'],
})
export class AddProductDialogComponent implements OnInit {
  public products!: Observable<ProductModel[]>;
  public searchProducts!: Observable<ProductModel[]>;
  public searching: boolean = false;
  lastKeyPress: number = 0;

  public selectedProducts: ProductModel[] = [];

  constructor(
    private store: Store<ProductManagerState>,
    private prodService: ProductManagerService
  ) {}

  ngOnInit(): void {}

  compareFunction = (o1: any, o2: any) => o1.id === o2.id;

  search(query: any): void {
    console.log((query.target.value as string).length);

    if (
      (query.target.value as string).length === 0 ||
      (query.target.value as string) === null
    ) {
      this.searching = false;
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
    }
  }

  select(product: ProductModel) {
    this.selectedProducts.push(product);
  }

  closeDialog(): ProductModel[] {
    return this.selectedProducts;
  }
}
