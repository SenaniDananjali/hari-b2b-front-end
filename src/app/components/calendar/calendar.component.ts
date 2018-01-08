import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

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
  public slotDetails: any[] = [];
  selected = 'Selected';
  dates: Dates[];
  busydates: Busydates[] = [];
  query: any;
  sum = 0;
  cost: number;
  initial: number;
  count: number;

  // @Input() stylistId: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const firstOfWeek = +moment().startOf('isoWeek').format('D');
    const today = +moment().format('D');
    this.route.queryParams.subscribe(v => {
      this.query = v;
      console.log(this.query.id);
    });


    for (let i = 0; i < 20; i++) {
      this.thisWeekDay[i] = this.setDate(firstOfWeek - today + i);

    }

    this.dataService.getBusyDates().subscribe((dates) => {
      this.dates = dates;
      this.datesForStylist(this.query.id);

    });
    // console.log(this.dates);
    this.cost = 0;
    this.initial = 200;
    this.count = 0;
  }


  setDate(num) {
    return moment().add(num, 'days');

  }

  datesForStylist(sty) {
    for (let i = 0; i < this.dates.length; i++) {
      if (sty === this.dates[i].stylist) {
        const bd: any = {};
        bd.busy = this.dates[i].busy;
        bd.slot = this.dates[i].slot;
        this.busydates.push(bd);
//        console.log('sdff');


      }
    }
    console.log(this.busydates);
  }


  makeBusy(busy) {
    console.log(busy);
    for (let i = 0; i < this.slotDetails.length; i++) {
      if (busy === this.slotDetails[i]) {
        console.log('deleted');
        this.slotDetails.splice(i, 1);
        this.cost = this.cost - this.initial;
        this.count--;
        return;
      }
    }
    this.slotDetails.push(busy);
    console.log(this.cost);
    this.cost = this.initial + this.cost;
    this.count ++;
    console.log('added');
    console.log(this.cost);

    // console.log(i);
  }

  notContainsInBusyDates(date, slot): boolean {
    for (let i = 0; i < this.busydates.length; i++) {
      const busy = this.busydates[i];
      if (busy.busy === date && busy.slot === slot) {
        return false;
      }
    }
    return true;
  }
}


// to store the selected time slot details
interface Details {
  date: string;
  state: number;

}

interface Dates {
  stylist: number;
  busy: string;
  slot: string;
}

interface Busydates {
  busy: string;
  slot: string;
}
