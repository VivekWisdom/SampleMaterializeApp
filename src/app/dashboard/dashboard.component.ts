import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MaterializeDirective} from 'angular2-materialize'


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.css'],
  templateUrl:'./dashboard.html',
  providers:[MaterializeDirective]
})
export class Dashboard {
  constructor() {

  }

}
