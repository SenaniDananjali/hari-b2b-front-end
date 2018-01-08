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
  ss;
  loc;
  skill;
  j;

  location: Locations[];
  skills: Skills[];
  job: Job[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getSkills().subscribe((skills) => {
      this.skills = skills;

    });

    this.dataService.getLocationsForSearch().subscribe((location) => {
      this.location = location;

    });

    this.dataService.getJob().subscribe((job) => {
      this.job = job;
      console.log(this.job);
    });
  }


}

interface Skills {
  id: number;
  description: string;
}

interface Locations {
  city: string;
}

interface Job {
  job: string;
}

