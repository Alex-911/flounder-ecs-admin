import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CategoryModel } from '../models/category.model';
import * as categoryReducer from './../state/category.reducers';
import * as categoryActions from './../state/category.actions';
import * as categorySelectors from './../state/category.selectors';
import { Observable } from 'rxjs';
import { SubCategoryState } from '../subCategory/state/subCategory.reducers';
import * as subCategoryActions from './../subCategory/state/subCategory.actions';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.scss'],
})
export class MainCategoryComponent implements OnInit {
  categories!: Observable<CategoryModel[]>;
  loading!: Observable<boolean>;

  constructor(
    private store: Store<categoryReducer.CategoryState>,
    private subCategoryStore: Store<SubCategoryState>,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new categoryActions.GetCategory());
    this.categories = this.store.pipe(select(categorySelectors.getCategories));
    this.loading = this.store.pipe(select(categorySelectors.getLoading));
  }

  loadSubCategories(category: CategoryModel) {
    this.subCategoryStore.dispatch(
      new subCategoryActions.GetMAINCategory({ mainCategory: category })
    );
    this.subCategoryStore.dispatch(
      new subCategoryActions.GetSubCategory({ mainCategory: category })
    );
  }

  editCategory(category: CategoryModel) {
    this.matDialog.open(AddEditCategoryComponent, {
      data: {
        category: category,
        editing: true,
      },
    });
  }

  addCategory() {
    this.matDialog.open(AddEditCategoryComponent, {
      data: {
        category: null,
        editing: false,
      },
    });
  }

  delete(category: CategoryModel) {
    this.store.dispatch(new categoryActions.DELETECategory({ category }));
  }
}
