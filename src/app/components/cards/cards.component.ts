import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import 'rxjs/add/operator/map';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  names: Names[];
  profPics: ProfPics[];
  stylistSkills: StylistSkills[];
  rel: '';
  query: any;
  stylistFromSkill: number[] = [];
  stylistFromLoc: number[] = [];
  stylistFromJob: number[] = [];
  namesSk: NamesSk[] = [];
  namesCommon: NamesCommon[] = [];
  namesJ: NamesJ[] = [];
  job: Job[] = [];
  loc: Preferred[];
  locForSearch: LocForSearch[];


  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.dataService.getNames().subscribe((names) => {
      this.names = names;
    });
    this.dataService.getProfPic().subscribe((profPics) => {
      this.profPics = profPics;
    });
    this.dataService.getStylistJob().subscribe((job) => {
      this.job = job;
      this.jobToStylist(this.query.job);
      this.dupNames(this.stylistFromJob);

    });

    this.dataService.getStylistSkills().subscribe((stylistSkills) => {
      this.stylistSkills = stylistSkills;
      this.skillToStylist(this.query.ss);
      this.dupNames(this.stylistFromSkill);
    });



    this.dataService.getLocations().subscribe((loc) => {
      this.loc = loc;
      this.locationToStylist(this.query.location);
      this.dupNames(this.stylistFromLoc);
    });

    this.dataService.getLocationsForSearch().subscribe((locForSearch) => {
      this.locForSearch = locForSearch;
      console.log(this.locForSearch);
    });

    this.route.queryParams.subscribe(v => {
      this.query = v;
      console.log(this.query.location);
    });
  }

  skillToStylist(skill) {
    for (let i = 0; i < this.stylistSkills.length; i++) {
      if (skill === this.stylistSkills[i].skill) {
        this.stylistFromSkill.push(this.stylistSkills[i].id);
      }
    }
  }

  jobToStylist(job) {
    for (let i = 0; i < this.job.length; i++) {
      if (job === this.job[i].job) {
        this.stylistFromJob.push(this.job[i].sty_id);
      }
    }
  }


  locationToStylist(loc) {
    for (let i = 0; i < this.loc.length; i++) {
      if (loc === this.loc[i].loc) {
        this.stylistFromLoc.push(this.loc[i].sty_id);
      }
    }
  }


  dupNames(sty: any[]) {
    for (let i = 0; i < this.names.length; i++) {
      for (let j = 0; j < sty.length; j++) {
        if (sty[j] === this.names[i].id) {
          const obj: any = {};
          obj.id = this.names[i].id;
          obj.first_name = this.names[i].first_name;
          obj.last_name = this.names[i].last_name;

          this.namesSk.push(obj);
          console.log(obj);

        }
      }
    }
  }


  dupNamesJ(sty: any[]) {
    for (let i = 0; i < this.names.length; i++) {
      for (let j = 0; j < sty.length; j++) {
        if (sty[j] === this.names[i].id) {
          const obj: any = {};
          obj.id = this.names[i].id;
          obj.first_name = this.names[i].first_name;
          obj.last_name = this.names[i].last_name;

          this.namesJ.push(obj);
          console.log(obj);

        }
      }
    }
  }
//   for (let i = 0; i < this.namesSk.length; i++) {
//   for (let j = 0; j < this.namesJ.length; j++) {
//   if (this.namesJ[j].id === this.namesSk[i].id) {
//   const obj: any = {};
//   obj.id = this.names[i].id;
//   obj.first_name = this.names[i].first_name;
//   obj.last_name = this.names[i].last_name;
//   this.namesCommon.push(obj);
//   console.log(obj);
// }
// }
// }


}

interface Names {
  id: number;
  first_name: string;
  last_name: string;

}

interface NamesSk {
  id: number;
  first_name: string;
  last_name: string;

}

interface NamesJ {
  id: number;
  first_name: string;
  last_name: string;

}
interface NamesCommon {
  id: number;
  first_name: string;
  last_name: string;

}


interface ProfPics {
  id: number;
  profile_id: number;
  image_path: string;
}

interface StylistSkills {
  id: number; // stylist Id
  skill: string;
  des: string;
}

interface Job {
  sty_id: number;
  job: string;
}


interface Preferred {
  sty_id: number;
  loc: string;
}

interface LocForSearch {
  loc: string;
}
