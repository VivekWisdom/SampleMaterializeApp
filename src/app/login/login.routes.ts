import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login }    from '../login';

const loginRoutes: Routes = [
  { path: '', component: Login }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);
