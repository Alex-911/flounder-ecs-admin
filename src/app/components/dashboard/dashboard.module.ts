import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '../auth/state/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../auth/state/auth.effects';
import { AuthService } from '../auth/service/auth.service';
import { AuthGuard } from '../auth/guard/auth.guard';
import { DashboardService } from './services/dashboard.service';
import { dashboardReducer } from './state/dashboard.reducers';
import { DashboardEffects } from './state/dashboard.effects';

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

const dashboardRoutes: Routes = [
  {
    path: '',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'orders',
        loadChildren: () =>
          import('./order-manager/order-manager.module').then(
            (mod) => mod.OrderManagerModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./user-manager/user-manager.module').then(
            (mod) => mod.UserManagerModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./product-manager/product-manager.module').then(
            (mod) => mod.ProductManagerModule
          ),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./customer-manager/customer-manager.module').then(
            (mod) => mod.CustomerManagerModule
          ),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then(
            (mod) => mod.CategoryModule
          ),
      },
      {
        path: 'appHome',
        loadChildren: () =>
          import('./app-home-page/app-home-page.module').then(
            (mod) => mod.AppHomePageModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [NavComponent, HomeComponent],
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

    RouterModule.forChild(dashboardRoutes),
    StoreModule.forFeature('auth', authReducer),
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([AuthEffects, DashboardEffects]),
  ],
  providers: [AuthService, DashboardService],
})
export class DashboardModule {}
