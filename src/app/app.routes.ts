import { Routes, RouterModule } from '@angular/router';
import { Login } from './login';
import { Dashboard } from './dashboard';
import { NoContent } from './no-content';
import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: 'login', component: Login },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', component: NoContent },
];
