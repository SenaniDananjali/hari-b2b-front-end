import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  public today;
  public todayName;

  public dateArray: [''];

  constructor() {
  }

  ngOnInit() {

    this.today = this.getDate(0).format('d');
    this.todayName = this.getDate(0).format('dddd');
    this.setdateArray();
    console.log(this.getDate(4));
    //this.dateArray.push() this.getDate(4);
  }

  getDate(num) {
    return moment().add(num, 'days');

  }


  setdateArray() {

    let num: number;
    for (num = 0; num < 14; num++) {
      //this.dateArray [num] = this.getDate(num);
      //  dateArray.push(this.getDate(num));
    }
    return this.dateArray;
  }


  /*
    createCalendar(month) {
      const moment = require('moment');
      const firstday = moment(month).startOf('M');
      const days = Array.apply(null, {length: month.daysInMonth()})
        .map(Number.call, Number);
      console.log(moment().weekday(-7));

      console.log(moment());

      console.log(moment(new Date()).add(6,'days'));
      console.log(moment(new Date()).add(7,'days').format('dddd'));




  */

}
