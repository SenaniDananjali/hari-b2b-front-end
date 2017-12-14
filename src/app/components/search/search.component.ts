import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {selector} from 'rxjs/operator/publish';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  radioData = 'Stylist name';

  selected: boolean;

  constructor() {
    console.log('constructure runs...');
  }

  ngOnInit() {
    this.selected = true;
  }


  onSearch(search) {
    console.log(search);
    console.log(this.radioData);
    return false;
  }
}
