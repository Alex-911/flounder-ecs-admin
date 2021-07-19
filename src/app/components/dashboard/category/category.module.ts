import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCategoryComponent } from './main-category/main-category.component';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './state/category.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './state/category.effects';
import { CategoryServiceService } from './services/category-service.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SubCategoryComponent } from './subCategory/sub-category/sub-category.component';
import { SubCategoryEffects } from './subCategory/state/subCategory.effects';
import { subCategoryReducer } from './subCategory/state/subCategory.reducers';
import { SubCategoryService } from './subCategory/service/sub-category.service';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditSubCategoryComponent } from './subCategory/add-edit-sub-category/add-edit-sub-category.component';
import { SubCategoryUploaderComponent } from './subCategory/sub-category-uploader/sub-category-uploader.component';
import { SubCategoryUploadtaskComponent } from './subCategory/sub-category-uploadtask/sub-category-uploadtask.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatTableExporterModule } from 'mat-table-exporter';
import { MatSelect, MatSelectModule } from '@angular/material/select';

export const categoryRoutes: Routes = [
  {
    path: '',
    component: CategoryHomeComponent,
  },
];

@NgModule({
  declarations: [
    MainCategoryComponent,
    SubCategoryComponent,
    CategoryHomeComponent,
    AddEditCategoryComponent,
    UploaderComponent,
    UploadTaskComponent,
    AddEditSubCategoryComponent,
    SubCategoryUploaderComponent,
    SubCategoryUploadtaskComponent,
  ],
  imports: [
    CommonModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatChipsModule,
    MatStepperModule,
    ScrollingModule,
    MatProgressBarModule,
    MatTableExporterModule,
    MatSelect,

    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(categoryRoutes),
    StoreModule.forFeature('category', categoryReducer),
    StoreModule.forFeature('subCategory', subCategoryReducer),
    EffectsModule.forFeature([CategoryEffects, SubCategoryEffects]),
    AngularFirestoreModule,
  ],
  providers: [CategoryServiceService, SubCategoryService],
})
export class CategoryModule {}
