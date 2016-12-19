import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Settings }    from './settings.component';

const settingsRoutes: Routes = [
  { path: '', component: Settings }
];

export const settingsRouting: ModuleWithProviders = RouterModule.forChild(settingsRoutes);
