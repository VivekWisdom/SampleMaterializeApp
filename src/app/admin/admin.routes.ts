import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Admin }    from './admin.component';

const adminRoutes: Routes = [
  { path: '', component: Admin }
];

export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
