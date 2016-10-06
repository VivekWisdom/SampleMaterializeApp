import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';
import { DataResolver } from './app.resolver';
import { Login } from './login';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'capacity', loadChildren: './capacity/capacity.module#CapacityModule' },
  { path: 'exception', loadChildren: './exception/exception.module#ExceptionModule' },
  { path: 'vendor', loadChildren: './vendor/vendor.module#VendorModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', component: NoContent },
];
