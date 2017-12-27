import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() {

  }
  radioData = 'Stylist name';

  selected: boolean;
  search = ' ';

  ngOnInit() {
    this.selected = true;
  }

  onSearch() {
    console.log(this.search);
  }

  advancedSearch() {
  }

}
