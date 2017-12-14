import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public date = moment();
  public daysArr;

  constructor() {
  }

  ngOnInit() {
    this.daysArr = this.createCalendar(this.date);

  }

  createCalendar(month) {
    let firstday = moment(month).startOf('M');
    let days = Array.apply(null, {length: month.daysInMonth()})
      .map(Number.call, Number);
    console.log(days);
    return days;


  }

}
