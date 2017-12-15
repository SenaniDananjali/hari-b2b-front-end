import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {require} from '../../../test';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public date = moment(); /*today*/
  public daysArr;
  public weekArr;


  constructor() {
  }

  ngOnInit() {

    this.daysArr = this.createCalendar(this.date);
    /*this.weekArr = this.createWeek(this.date);*/
  }

  createCalendar(month) {
    /*const moment = require('moment');*/
    const firstday = moment(month).startOf('M');
    const days = Array.apply(null, {length: month.daysInMonth()})
      .map(Number.call, Number);
    /*console.log(moment().weekday(-7));
    // console.log(moment().weekday(0));
      //console.log(nextday().date);
    */

    console.log(moment());
    console.log(moment.day(1));


    return days;


  }

  createWeek(month) {
    const days = Array.apply(null, {length: 7}).map(Number.call, Number);
    console.log(moment().startOf('week').toString());
    return days;
  }

}
