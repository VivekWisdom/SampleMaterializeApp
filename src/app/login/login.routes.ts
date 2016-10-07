import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from '../login';

export const loginRoutes: Routes = [
  { path: 'login', component: Login }
];
