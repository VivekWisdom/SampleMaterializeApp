import { NgModule } from '@angular/core';
import { Exception } from './exception.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [ SharedModule ],
  declarations: [
    Exception
  ],
  providers: [

  ]
})
export class ExceptionModule { }
