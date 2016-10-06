import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard }    from '../dashboard';

const dashboardRoutes: Routes = [
  { path: '', component: Dashboard }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
