import { NgModule }       from '@angular/core';
import { Exception }    from '../exception';
import { exceptionRouting } from '../exception';

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
