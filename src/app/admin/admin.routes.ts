import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admin }    from '../admin';

export const adminRoutes: Routes = [
  { path: 'admin', component: Admin }
];
