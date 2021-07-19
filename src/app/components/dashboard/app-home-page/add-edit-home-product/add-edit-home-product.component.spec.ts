import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHomeProductComponent } from './add-edit-home-product.component';

describe('AddEditHomeProductComponent', () => {
  let component: AddEditHomeProductComponent;
  let fixture: ComponentFixture<AddEditHomeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHomeProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHomeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
