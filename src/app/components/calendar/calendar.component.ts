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


  constructor() {
  }

  ngOnInit() {

    this.today = this.getDate(0);
    this.day1 = this.getDate(1);
    this.day2 = this.getDate(2);
    this.day3 = this.getDate(3);
    this.day4 = this.getDate(4);
    this.day5 = this.getDate(5);
    this.day6 = this.getDate(6);
    this.day7 = this.getDate(7);
    this.day8 = this.getDate(8);
    this.day9 = this.getDate(9);
    this.day10 = this.getDate(10);
    this.day11 = this.getDate(11);
    this.day12 = this.getDate(12);
    this.day13 = this.getDate(13);
    this.day14 = this.getDate(14);


    //this.todayName = this.getDate(0).format('dddd');
    //this.setdateArray();
    console.log(this.getDate(4));
    //this.dateArray.push() this.getDate(4);
  }

  getDate(num) {
    return moment().add(num, 'days');

  }


}
