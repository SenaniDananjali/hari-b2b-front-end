import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  public today;
  public day1;
  public day2;
  public day3;
  public day4;
  public day5;
  public day6;
  public day7;
  public day8;
  public day9;
  public day10;
  public day11;
  public day12;
  public day13;
  public day14;
  public day15;

  public day: any[] = [];

  constructor() {
  }

  ngOnInit() {

    for (let i = 0; i < 14; i++) {
      this.day[i] = this.getDate(i);

    }

    console.log(this.getDate(4));

  }

  getDate(num) {
    return moment().add(num, 'days');

  }


}
