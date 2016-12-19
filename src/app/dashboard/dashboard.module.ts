import { NgModule } from '@angular/core';
import { Dashboard } from './dashboard.component';
import { dashboardRouting } from './dashboard.routes';

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
