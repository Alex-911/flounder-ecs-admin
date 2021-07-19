import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderModel } from '../models/order.model';
import { OrderManagerState } from '../state/orders.reducers';
import * as orderAction from './../state/orders.actions';
import * as orderSelectors from './../state/orders.selectors';

@Component({
  selector: 'app-order-home',
  templateUrl: './order-home.component.html',
  styleUrls: ['./order-home.component.scss'],
})
export class OrderHomeComponent implements OnInit, AfterViewInit {
  public liveOrders!: Observable<OrderModel[]>;
  public loading!: Observable<boolean>;

  displayedColumns: string[] = [
    'address',
    'products',
    'orderId',
    'amount',
    'status',
  ];
  dataSource = new MatTableDataSource<OrderModel>();

  status!: string;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<OrderManagerState>) {}

  ngOnInit(): void {
    this.store.dispatch(new orderAction.GetOrders());
    this.liveOrders = this.store.pipe(select(orderSelectors.getOrders));
    this.liveOrders.subscribe((ordrs) => (this.dataSource.data = ordrs));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(value: string): void {
    console.log(value);
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  changeStatus(order: OrderModel, status: string) {
    console.log(status);
    console.log(order);
    this.store.dispatch(
      new orderAction.UPDATEOrders({ orders: order, status: status })
    );
  }
}
