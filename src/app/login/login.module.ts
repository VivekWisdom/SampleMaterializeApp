import { NgModule }       from '@angular/core';

import { Login }    from '../login';
import { loginRouting } from '../login';

@NgModule({
  imports: [
    loginRouting
  ],
  declarations: [
    Login
  ],
  providers: [

  ]
})
export class LoginModule {}
