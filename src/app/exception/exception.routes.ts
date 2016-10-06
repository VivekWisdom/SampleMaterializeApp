import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exception }    from '../exception';

const exceptionRoutes: Routes = [
  { path: '', component: Exception }
];

export const exceptionRouting: ModuleWithProviders = RouterModule.forChild(exceptionRoutes);
