import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  radioData = 'Stylist name';

  selected: boolean;
  search = ' ';

  constructor() {
  }

  ngOnInit() {
    this.selected = true;
  }


  onSearch() {

    console.log(this.search);
    // console.log($event);
    // console.log(this.radioData);

  }

  advancedSearch() {

  }
}
