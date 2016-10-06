import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard }    from '../dashboard';
import { Capacity }    from '../capacity';
import { Admin }    from '../admin';
import { Exception }  from '../exception';
import { Settings } from '../settings';
import { Vendor } from '../vendor';

const dashboardRoutes: Routes = [
  {
    path: '',
    component:Dashboard,
    children: [
      { path: '', component: Capacity },
      { path: 'exception', component: Exception },
      { path: 'settings', component: Settings },
      { path: 'vendor', component: Vendor },
      { path: 'admin', component: Admin },
    ]
  }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
