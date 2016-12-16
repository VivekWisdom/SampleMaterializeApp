import { NgModule }       from '@angular/core';

import { Vendor }    from './vendor.component';
import { vendorRouting } from './vendor.routes';

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
