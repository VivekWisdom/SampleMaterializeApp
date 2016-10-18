import { NgModule }       from '@angular/core';
import { Vendor }    from './vendor.component';
import { SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [ SharedModule],
  declarations: [
    Vendor
  ],
  providers: [

  ]
})
export class VendorModule {}
