import { NgModule }       from '@angular/core';

import { Capacity }    from './capacity.component';
import { capacityRouting } from './capacity.routes';

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
