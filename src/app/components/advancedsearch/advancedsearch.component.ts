import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {
  from;
  to;


  constructor() {
  }

  ngOnInit() {
    // console.log(this.date);
  }

  hello() {
    console.log('hello');
    //this.d = 'my value is changed';
  }

}
