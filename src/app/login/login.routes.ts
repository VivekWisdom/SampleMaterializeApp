import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login }    from './login.component';

const loginRoutes: Routes = [
  { path: '', component: Login }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);
