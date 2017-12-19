import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

enum busyStates {

  available = 0,
  busy = 1,
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public thisWeekDay: any[] = [];
  public selectedSessions: any[] = [];
  details: Details;
  public slotDetails: Details[] = [];

  constructor() {
  }

  ngOnInit() {
   // this.test = ['dffff', 'dfdgg', 'ggffgg'];
    const firstOfWeek = +moment().startOf('isoWeek').format('D');
    const today = +moment().format('D');
//    const lastOfWeek = +moment().endOf('isoWeek').format('D');

    for (let i = 0; i < 14; i++) {
      this.thisWeekDay[i] = this.setDate(firstOfWeek - today + i);
      // console.log(this.thisWeekDay[i]);
    }


  }

  setDate(num) {
    return moment().add(num, 'days');

  }

  makeBusy(busy) {
    console.log(busy);
    // this.selectedSessions.push(busy);
    // return console.log(this.busySlots);
    // console.log(busy.valueOf());

  }
}

// to store the selected time slot details
interface Details {
  date: string;
  stylistName: string;
  stylistId: number;
  state: number;

}
