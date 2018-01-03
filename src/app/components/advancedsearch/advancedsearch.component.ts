import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {
  // ngModels
  for;
  skill;
  loc;

  location: Locations[];
  skills: Skills[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getSkills().subscribe((skills) => {
      this.skills = skills;

    });

    this.dataService.getLocations().subscribe((location) => {
      this.location = location;

    });
  }


}

interface Skills {
  id: number;
  description: string;
}

interface Locations {
  sty_id: number;
  loc: string;
}
