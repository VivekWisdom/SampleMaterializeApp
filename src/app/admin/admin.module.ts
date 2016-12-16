import { NgModule }       from '@angular/core';

import { Admin }    from './admin.component';
import { adminRouting } from './admin.routes';

@NgModule({
  imports: [
    adminRouting
  ],
  declarations: [
    Admin
  ],
  providers: [

  ]
})
export class AdminModule {}
