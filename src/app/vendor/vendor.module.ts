import { NgModule }       from '@angular/core';
<<<<<<< HEAD

import { Vendor }    from './vendor.component';
import { vendorRouting } from './vendor.routes';
=======
import { Vendor }    from './vendor.component';
import { SharedModule} from '../shared/shared.module';
>>>>>>> 7246fc4709a140e47e8d7d156de35647541d0b7f

@NgModule({
  imports: [ SharedModule],
  declarations: [
    Vendor
  ],
  providers: [

  ]
})
export class VendorModule {}
