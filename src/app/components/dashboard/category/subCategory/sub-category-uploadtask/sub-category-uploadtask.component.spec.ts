import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryUploadtaskComponent } from './sub-category-uploadtask.component';

describe('SubCategoryUploadtaskComponent', () => {
  let component: SubCategoryUploadtaskComponent;
  let fixture: ComponentFixture<SubCategoryUploadtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategoryUploadtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryUploadtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
