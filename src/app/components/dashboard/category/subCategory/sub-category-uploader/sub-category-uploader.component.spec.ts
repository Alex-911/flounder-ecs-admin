import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryUploaderComponent } from './sub-category-uploader.component';

describe('SubCategoryUploaderComponent', () => {
  let component: SubCategoryUploaderComponent;
  let fixture: ComponentFixture<SubCategoryUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
