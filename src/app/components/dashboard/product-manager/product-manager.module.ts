import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home/product-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagerService } from './services/product-manager.service';
import { StoreModule } from '@ngrx/store';
import { productManagerReducer } from './state/product-manager.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductManagerEffects } from './state/product-manager.effects';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiUploaderComponent } from './multi-uploader/multi-uploader.component';
import { SingleUploaderComponent } from './single-uploader/single-uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { categoryReducer } from '../category/state/category.reducers';
import { subCategoryReducer } from '../category/subCategory/state/subCategory.reducers';
import { CategoryEffects } from '../category/state/category.effects';
import { SubCategoryEffects } from '../category/subCategory/state/subCategory.effects';
import { CategoryServiceService } from '../category/services/category-service.service';
import { SubCategoryService } from '../category/subCategory/service/sub-category.service';

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
import { MatOption } from '@angular/material/core';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
  },
];

@NgModule({
  declarations: [
    ProductHomeComponent,
    AddEditProductComponent,
    MultiUploaderComponent,
    SingleUploaderComponent,
    UploadTaskComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
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
    MatOption,

    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('product-manager', productManagerReducer),
    StoreModule.forFeature('category', categoryReducer),
    StoreModule.forFeature('subCategory', subCategoryReducer),
    EffectsModule.forFeature([
      ProductManagerEffects,
      CategoryEffects,
      SubCategoryEffects,
    ]),
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
  ],
  providers: [
    ProductManagerService,
    CategoryServiceService,
    SubCategoryService,
  ],
})
export class ProductManagerModule {}
