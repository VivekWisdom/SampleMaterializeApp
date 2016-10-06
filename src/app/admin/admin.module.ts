import { NgModule }       from '@angular/core';

import { Admin }    from '../admin';
import { adminRouting } from '../admin';

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
