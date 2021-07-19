import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProductListComponent } from './home-product-list/home-product-list.component';
import { AddEditHomeProductComponent } from './add-edit-home-product/add-edit-home-product.component';
import { StoreModule } from '@ngrx/store';
import { appHomeReducers } from './state/appHome.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppHomeEffects } from './state/appHome.effects';
import { AppHomeService } from './services/app-home.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductListSummaryComponent } from './home-product-list-summary/home-product-list-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';

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

const appHomeRoutes: Routes = [
  { path: '', component: HomeProductListComponent },
];

@NgModule({
  declarations: [
    HomeProductListComponent,
    AddEditHomeProductComponent,
    HomeProductListSummaryComponent,
    AddProductDialogComponent,
    AddProductDialogComponent,
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
    RouterModule.forChild(appHomeRoutes),
    StoreModule.forFeature('appHomePage', appHomeReducers),
    EffectsModule.forFeature([AppHomeEffects]),
  ],
  providers: [AppHomeService],
})
export class AppHomePageModule {}
