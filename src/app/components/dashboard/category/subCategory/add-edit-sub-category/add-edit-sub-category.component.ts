import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CategoryModel } from '../../models/category.model';
import * as Uid from 'uuid';
import { SubCategoryState } from '../state/subCategory.reducers';
import {
  ADDSubCategory,
  UPDATESubCategory,
} from '../state/subCategory.actions';

@Component({
  selector: 'app-add-edit-sub-category',
  templateUrl: './add-edit-sub-category.component.html',
  styleUrls: ['./add-edit-sub-category.component.scss'],
})
export class AddEditSubCategoryComponent implements OnInit {
  public categoryForm!: FormGroup;
  public image!: string;
  public newId: string = Uid.v4();
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      mainCategory: CategoryModel;
      subCategory: CategoryModel;
      editing: boolean;
    },
    private fb: FormBuilder,
    private store: Store<SubCategoryState>
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      title: [this.data?.subCategory?.title, [Validators.required]],
      image: [this.data?.subCategory?.image, [Validators.required]],
    });
  }

  confirm() {
    console.log(this.image);
    this.categoryForm.patchValue({
      image: this.image,
    });
  }

  addCategory() {
    if (this.categoryForm.valid) {
      const title = this.categoryForm.get('title')!.value;
      const image = this.categoryForm.get('image')!.value;

      const newSubCategory: CategoryModel = {
        id: this.newId,
        title: title,
        image: image,
      };

      this.store.dispatch(
        new ADDSubCategory({
          mainCategory: this.data?.mainCategory,
          subCategory: newSubCategory,
        })
      );
    }
  }

  updateCategory() {
    if (this.categoryForm.valid) {
      const title = this.categoryForm.get('title')!.value;
      const image = this.categoryForm.get('image')!.value;

      const newSubCategory: CategoryModel = {
        id: this.data.subCategory.id,
        title: title,
        image: image,
      };

      this.store.dispatch(
        new UPDATESubCategory({
          mainCategory: this.data?.mainCategory,
          subCategory: newSubCategory,
        })
      );
    }
  }
}
