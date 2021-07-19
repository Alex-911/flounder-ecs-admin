import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/auth/guard/auth.guard';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MainHomeComponent } from './components/main-home/main-home.component';

const routes: Routes = [
  { path: '', component: MainHomeComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
