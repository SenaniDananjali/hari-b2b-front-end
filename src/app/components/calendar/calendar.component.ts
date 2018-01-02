import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DataService} from '../../services/data.service';

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
  bdates: Bdates[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    const firstOfWeek = +moment().startOf('isoWeek').format('D');
    const today = +moment().format('D');


    for (let i = 0; i < 70; i++) {
      this.thisWeekDay[i] = this.setDate(firstOfWeek - today + i);

    }

    this.dataService.getBusyDates().subscribe((bdates) => {
      console.log(this.bdates);
    });

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
}


// to store the selected time slot details
interface Details {
  date: string;
  state: number;

}

interface Bdates {
  stylist: number;
  slot: string;
  busy: string;

}
