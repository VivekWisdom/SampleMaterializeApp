import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vendor }    from './vendor.component';

const vendorRoutes: Routes = [
  { path: '', component: Vendor }
];

export const vendorRouting: ModuleWithProviders = RouterModule.forChild(vendorRoutes);
