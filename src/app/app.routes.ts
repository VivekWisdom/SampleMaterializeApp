import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';
import { DataResolver } from './app.resolver';
import { loginRoutes } from './login';
import {capacityRoutes} from './capacity';
import {exceptionRoutes} from './exception';
import {vendorRoutes} from './vendor';
import {adminRoutes} from './admin';
import {settingsRoutes} from './settings';


export const ROUTES: Routes = [
  ...loginRoutes,
  ...capacityRoutes,
  ...exceptionRoutes,
  ...vendorRoutes,
  ...adminRoutes,
  ...settingsRoutes
];
