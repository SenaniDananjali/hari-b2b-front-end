import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public thisWeekDay: any[] = [];
  public nextWeekDay: any[] = [];

  //firstOfWeek: number;

  constructor() {
  }

  ngOnInit() {

    const firstOfWeek = +moment().startOf('isoWeek').format('D');
    const today = +moment().format('D');
    const lastOfWeek = +moment().endOf('isoWeek').format('D');

    for (let i = 0; i < 7; i++) {
      this.thisWeekDay[i] = this.getDate(firstOfWeek - today + i);
      console.log(this.thisWeekDay[i]);
    }


    for (let i = 0; i < 7; i++) {
      this.nextWeekDay[i] = this.getDate(lastOfWeek - today + 1 + i);
      console.log(lastOfWeek);
    }

    // moment().endOf('isoWeek');

  }

  getDate(num) {
    return moment().add(num, 'days');

  }
}
