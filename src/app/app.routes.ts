import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';
import { DataResolver } from './app.resolver';
import { Login } from './login/login.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component: Login },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'capacity', loadChildren: 'app/capacity/capacity.module#CapacityModule' },
  { path: 'exception', loadChildren: 'app/exception/exception.module#ExceptionModule' },
  { path: 'vendor', loadChildren: 'app/vendor/vendor.module#VendorModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: '**', component: NoContent },
];
