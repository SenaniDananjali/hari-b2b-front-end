import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {
  from;
  to;
  skills: any[];
  location: any[];

  constructor() {
  }

  ngOnInit() {
    // console.log(this.date);
    this.skills = ['Hair Dressing', 'Hair Coloring', 'Perming', 'men/women hair cutting'];
    this.location = ['Sydney', 'Kingston', 'Perth'];
  }


}
