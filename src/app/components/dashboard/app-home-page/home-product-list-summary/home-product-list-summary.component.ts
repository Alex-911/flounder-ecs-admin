import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeProductModel } from '../models/homeProduct.model';

@Component({
  selector: 'app-home-product-list-summary',
  templateUrl: './home-product-list-summary.component.html',
  styleUrls: ['./home-product-list-summary.component.scss'],
})
export class HomeProductListSummaryComponent implements OnInit {
  @Input() product!: HomeProductModel;

  constructor() {}

  ngOnInit(): void {}
}
