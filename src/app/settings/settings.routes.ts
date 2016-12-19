import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Settings }    from './settings.component';

export const settingsRoutes: Routes = [
  { path: 'settings', component: Settings }
];
