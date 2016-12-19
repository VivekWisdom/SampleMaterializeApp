import { NgModule } from '@angular/core';

<<<<<<< HEAD
// import { Login }    from '../login';
import { Login } from './login.component';
// import { loginRouting } from '../login';
import { loginRouting } from './login.routes';
=======
import { Login } from './login.component';
>>>>>>> 7246fc4709a140e47e8d7d156de35647541d0b7f

@NgModule({
  imports: [],
  declarations: [
    Login
  ],
  providers: []
})
<<<<<<< HEAD
export class LoginModule {
  constructor(){
    console.log(Login, loginRouting);
  }
}
=======
export class LoginModule { }
>>>>>>> 7246fc4709a140e47e8d7d156de35647541d0b7f
