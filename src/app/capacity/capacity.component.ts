import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MaterializeDirective} from 'angular2-materialize'


@Component({
  selector: 'capacity',
  styleUrls: ['./capacity.css'],
  templateUrl:'./capacity.html',
  providers:[MaterializeDirective]
})
export class Capacity {
  constructor() {

  }

}
