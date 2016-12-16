import { NgModule }       from '@angular/core';

// import { Login }    from '../login';
import { Login } from './login.component';
// import { loginRouting } from '../login';
import { loginRouting } from './login.routes';

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
export class LoginModule {
  constructor(){
    console.log(Login, loginRouting);
  }
}
