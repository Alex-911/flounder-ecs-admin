import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryModel } from '../models/category.model';
import * as Uid from 'uuid';
import { Store } from '@ngrx/store';
import { CategoryState } from '../state/category.reducers';
import { ADDCategory, UPDATECategory } from '../state/category.actions';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss'],
})
export class AddEditCategoryComponent implements OnInit {
  public categoryForm!: FormGroup;
  public image!: string;
  public newId: string = Uid.v4();
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      category: CategoryModel;
      editing: boolean;
    },
    private fb: FormBuilder,
    private store: Store<CategoryState>
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      title: [this.data?.category?.title, [Validators.required]],
      image: [this.data?.category?.image, [Validators.required]],
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

      const newCategory: CategoryModel = {
        id: this.newId,
        title: title,
        image: image,
      };

      this.store.dispatch(new ADDCategory({ category: newCategory }));
    }
  }

  updateCategory() {
    if (this.categoryForm.valid) {
      const title = this.categoryForm.get('title')!.value;
      const image = this.categoryForm.get('image')!.value;

      const newCategory: CategoryModel = {
        id: this.data.category.id,
        title: title,
        image: image,
      };

      this.store.dispatch(new UPDATECategory({ category: newCategory }));
    }
  }
}
