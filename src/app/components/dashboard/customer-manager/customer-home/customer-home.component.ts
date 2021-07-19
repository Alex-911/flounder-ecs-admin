import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import * as custReducer from './../state/customers.reducers';
import * as custActions from './../state/customers.actions';
import * as custSelectors from './../state/customers.selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerModel } from '../model/customer.model';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss'],
})
export class CustomerHomeComponent implements OnInit, AfterViewInit {
  private customers!: Observable<CustomerModel[]>;
  public loading!: Observable<boolean>;

  public displayedColumns: string[] = ['name', 'email', 'phone'];
  public dataSource = new MatTableDataSource<CustomerModel>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<custReducer.CustomerState>) {}

  ngOnInit(): void {
    this.loading = this.store.pipe(select(custSelectors.getLoading));
    this.store.dispatch(new custActions.GetCustomer());
    this.customers = this.store.pipe(select(custSelectors.getCustomers));
    this.customers.subscribe((custs) => (this.dataSource.data = custs));
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(value: string): void {
    console.log(value);
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
