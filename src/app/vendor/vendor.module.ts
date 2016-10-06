import { NgModule }       from '@angular/core';

import { Vendor }    from '../vendor';
import { vendorRouting } from '../vendor';

@NgModule({
  imports: [
    vendorRouting
  ],
  declarations: [
    Vendor
  ],
  providers: [

  ]
})
export class VendorModule {}
