import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { Dashboard }    from '../dashboard';
import { Capacity }    from '../capacity';
import { Admin }    from '../admin';
import { Exception }  from '../exception';
import { Settings } from '../settings';
import { Vendor } from '../vendor';
import { dashboardRouting } from './dashboard.routing';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting
  ],
  declarations: [
    Dashboard,
    Capacity,
    Admin,
    Exception,
    Settings,
    Vendor
  ],
  providers: [

  ]
})
export class DashboardModule {}
