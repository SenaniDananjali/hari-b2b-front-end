import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  skills: Skills[];
  names: Names[];

  constructor(private dataService: DataService) {
  }

  radioData = 'Stylist name';

  selected: boolean;
  search = ' ';

  ngOnInit() {
    this.selected = true;

    this.dataService.getSkills().subscribe((skills) => {
      this.skills = skills;

    });
    this.dataService.getNames().subscribe((names) => {
      this.names = names;
    });

  }

  onSearch() {
    console.log(this.search);

  }

  advancedSearch() {
  }

}

interface Skills {
  id: number;
  description: string;
}

interface Names {
  id: number;
  first_name: string;
  last_name: string;
}
