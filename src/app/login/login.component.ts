import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  providers: [],
  styleUrls: ['./login.css'],
  templateUrl: './login.html'
})
export class Login {
  constructor(private _router: Router) {
  }

  login() {
    this._router.navigate(['/']);
  }
}
