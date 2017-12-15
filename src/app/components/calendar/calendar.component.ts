import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public day: any[] = [];

  constructor() {
  }

  ngOnInit() {

    for (let i = -1; i < 14; i++) {
      this.day[i] = this.getDate(i);

    }
    console.log(moment().startOf('isoWeek'));
    // moment().endOf('isoWeek');

  }

  getDate(num) {
    return moment().add(num, 'days');

  }


}
