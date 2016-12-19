import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Capacity }    from './capacity.component';

export const capacityRoutes: Routes = [
  {path:'', component: Capacity}
];
