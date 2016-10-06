import { NgModule } from '@angular/core';
import { Dashboard } from '../dashboard';
import { dashboardRouting } from '../dashboard';

@NgModule({
  imports: [
    dashboardRouting
  ],
  declarations: [
    Dashboard
  ],
  providers: [

  ]
})
export class DashboardModule {}
