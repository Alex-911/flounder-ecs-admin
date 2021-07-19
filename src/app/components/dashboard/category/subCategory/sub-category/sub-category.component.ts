import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryModel } from '../../models/category.model';
import { AddEditSubCategoryComponent } from '../add-edit-sub-category/add-edit-sub-category.component';
import { DELETESubCategory } from '../state/subCategory.actions';
import { SubCategoryState } from '../state/subCategory.reducers';
import * as subCategorySelector from './../state/subCategory.selectors';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {
  mainCategory$!: Observable<CategoryModel | null>;
  subCategories!: Observable<CategoryModel[]>;
  mainCategory!: CategoryModel;

  constructor(
    private store: Store<SubCategoryState>,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mainCategory$ = this.store.pipe(
      select(subCategorySelector.getMainCategory)
    );
    this.mainCategory$.subscribe((category) => (this.mainCategory = category!));
    this.subCategories = this.store.pipe(
      select(subCategorySelector.getSubCategories)
    );
  }

  editSubCategory(category: CategoryModel) {
    this.matDialog.open(AddEditSubCategoryComponent, {
      data: {
        mainCategory: this.mainCategory,
        subCategory: category,
        editing: true,
      },
    });
  }

  addSubCategory() {
    this.matDialog.open(AddEditSubCategoryComponent, {
      data: {
        mainCategory: this.mainCategory,
        subCategory: null,
        editing: false,
      },
    });
  }

  deleteSubCategory(subCategory: CategoryModel) {
    this.store.dispatch(
      new DELETESubCategory({
        mainCategory: this.mainCategory,
        subCategory: subCategory,
      })
    );
  }
}
