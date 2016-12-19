import { NgModule }       from '@angular/core';

import { Capacity }    from './capacity.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    Capacity
  ],
  providers: [

  ]
})
export class CapacityModule {}
