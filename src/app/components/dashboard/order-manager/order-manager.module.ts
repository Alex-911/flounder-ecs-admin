import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHomeComponent } from './order-home/order-home.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { orderManagerReducer } from './state/orders.reducers';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './state/orders.effects';
import { OrdersService } from './services/orders.service';

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

const orderRoutes: Routes = [{ path: '', component: OrderHomeComponent }];

@NgModule({
  declarations: [OrderHomeComponent],
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

    RouterModule.forChild(orderRoutes),
    StoreModule.forFeature('orders', orderManagerReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
  providers: [OrdersService],
})
export class OrderManagerModule {}
