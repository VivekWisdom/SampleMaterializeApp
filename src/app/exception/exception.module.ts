import { NgModule }       from '@angular/core';
import { Exception }    from './exception.component';
import { exceptionRouting } from './exception.routes';

@NgModule({
  imports: [
    exceptionRouting
  ],
  declarations: [
    Exception
  ],
  providers: [

  ]
})
export class ExceptionModule {}
