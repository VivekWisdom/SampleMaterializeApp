import { NgModule }       from '@angular/core';

import { Capacity }    from '../capacity';
import { capacityRouting } from '../capacity';

@NgModule({
  imports: [
    capacityRouting
  ],
  declarations: [
    Capacity
  ],
  providers: [

  ]
})
export class CapacityModule {}
