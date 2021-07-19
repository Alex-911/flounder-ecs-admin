import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductListSummaryComponent } from './home-product-list-summary.component';

describe('HomeProductListSummaryComponent', () => {
  let component: HomeProductListSummaryComponent;
  let fixture: ComponentFixture<HomeProductListSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductListSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductListSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
