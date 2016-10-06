import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capacity }    from '../capacity';

const capacityRoutes: Routes = [
  { path: '', component: Capacity }
];

export const capacityRouting: ModuleWithProviders = RouterModule.forChild(capacityRoutes);
