import { Routes, RouterModule } from '@angular/router';
import { Login } from './login';
import { Dashboard } from './dashboard';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Login },
  { path: 'login',  component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: '**',    component: NoContent },
];
