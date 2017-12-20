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
  public nextWeekDay: any[] = [];
  public slotDetails: any[] = [];
  selected = 'Selected';

  constructor() {
  }

  ngOnInit() {
    const firstOfWeek = +moment().startOf('isoWeek').format('D');
    const today = +moment().format('D');
    const lastOfWeek = +moment().endOf('isoWeek').format('D');

    for (let i = 0; i < 21; i++) {
      this.thisWeekDay[i] = this.setDate(firstOfWeek - today + i);

    }

    for (let i = 0; i < 7; i++) {
      this.nextWeekDay[i] = this.setDate(lastOfWeek - today + 1 + i);

    }


  }

  setDate(num) {
    return moment().add(num, 'days');

  }

  makeBusy(busy) {
    console.log(busy);
    for (let i = 0; i < this.slotDetails.length; i++) {
      if (busy === this.slotDetails[i]) {
        console.log('deleted');
        this.slotDetails.splice(i, 1);
        return;
      }
    }
    this.slotDetails.push(busy);
    console.log('added');

    // console.log(i);
  }


  deleteBusy(booking) {
    console.log(booking);
    for (let i = 0; i < this.slotDetails.length; i++) {
      if (this.slotDetails[i] === booking) {
        this.slotDetails.splice(i, 1);
      }
    }

  }
}

// to store the selected time slot details
interface Details {
  date: string;
  state: number;

}
