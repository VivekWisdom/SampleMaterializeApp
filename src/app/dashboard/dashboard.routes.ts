import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard }    from './dashboard.component';

const dashboardRoutes: Routes = [
  { path: '', component: Dashboard }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
