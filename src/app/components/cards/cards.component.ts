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
  namesTest: NamesTest[] = [];
  job: Job[] = [];
  loc: Preferred[];
  locForSearch: LocForSearch[];
  full: Full[];
  // namesCommon: NamesCommon[] = [];
  // namesJ: NamesJ[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataService.getLocationsForSearch().subscribe((locForSearch) => {
      this.locForSearch = locForSearch;
      console.log(this.locForSearch);
    });

    this.route.queryParams.subscribe(v => {
      this.query = v;
    });

    this.dataService.getProfPic().subscribe((profPics) => {
      this.profPics = profPics;
    });
    this.dataService.getFullDetails().subscribe((full) => {
      this.full = full;
    });
    this.dataService.getNames().subscribe((names) => {
      this.names = names;
    });
    this.dataService.getFullDetails().subscribe((full) => {
      this.full = full;
      for (let i = 0; i < this.full.length; i++) {
        const obj: any = {};
        obj.id = this.full[i].sty_id;
        obj.first_name = this.full[i].first_name;
        obj.last_name = this.full[i].last_name;
        if (this.isInclude(this.namesSk, obj)) {
        } else {
          console.log(this.isInclude(this.namesSk, obj));
          this.namesSk.push(obj);
          console.log(obj);
          console.log(this.isInclude(this.namesSk, obj));
        }
      }

    });


    this.dataService.getStylistJob().subscribe((job) => {
      this.job = job;
      if (this.query.hasOwnProperty('job')) {
        this.jobToStylist(this.query.job);
        this.dupNames(this.stylistFromJob);
        this.filter();
        // this.removeDuplicates();
      }

    });

    this.dataService.getStylistSkills().subscribe((stylistSkills) => {
      this.stylistSkills = stylistSkills;
      if (this.query.hasOwnProperty('ss')) {
        this.skillToStylist(this.query.ss);
        this.dupNames(this.stylistFromSkill);
        this.filter();
        // this.removeDuplicates();
      }
    });


    this.dataService.getLocations().subscribe((loc) => {
      this.loc = loc;
      if (this.query.hasOwnProperty('location')) {
        this.locationToStylist(this.query.location);
        this.dupNames(this.stylistFromLoc);
        this.filter();
        // this.removeDuplicates();
      }
    });

this.removeDuplicates();
  }

  removeDuplicates() {
    let current = this.namesSk[0];
    let found = false;

    for (let i = 0; i < this.namesSk.length; i++) {
      if (current === this.namesSk[i] && !found) {
        found = true;
      } else if (current !== this.namesSk[i]) {
        console.log(current);
        current = this.namesSk[i];
        found = false;
      }
    }
  }

  filter() {
    const test: NamesTest[] = this.namesSk;
    this.namesSk = [];
    console.log(this.namesSk);
    for (let i = 0; i < this.namesTest.length; i++) {
      for (let j = 0; j < test.length; j++) {
        if (this.namesTest[i].id === test[j].id) {
          console.log(test[j]);
          this.namesSk.push(test[j]);
        }
      }
    }
  }

  isInclude(arr: any[], obj) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === obj.id && arr[i].first_name === obj.first_name && arr[i].last_name === obj.last_name) {
        return true;
      }
    }
    return false;

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
    for (let i = 0; i < this.namesSk.length; i++) {
      for (let j = 0; j < sty.length; j++) {
        if (sty[j] === this.namesSk[i].id) {
          const obj: any = {};
          obj.id = this.namesSk[i].id;
          obj.first_name = this.namesSk[i].first_name;
          obj.last_name = this.namesSk[i].last_name;

          this.namesTest.push(obj);
          console.log(obj);

        }
      }
    }
  }

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

interface NamesTest {
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

interface Full {
  sty_id: number;
  first_name: string;
  last_name: string;
  job: string;
  des: string;
  skill: string;
  loc: string;
}

// this.dataService.getFullDetails().subscribe((full) => {
//   this.full = full;
//   console.log(this.full);
//   for (let i = 0; i < full.length; i++) {
//     if (this.query.location === full.loc) {
//       if (this.query.ss === full.skill) {
//         if (this.query.job === full.job) {
//           const obj: any = {};
//           obj.id = this.names[i].id;
//           obj.first_name = this.names[i].first_name;
//           obj.last_name = this.names[i].last_name;
//
//           this.namesSk.push(obj);
//           console.log(obj);
//         }
//       }
//
//     }
//   }
// });

// dupNamesJ(sty: any[]) {
//   for (let i = 0; i < this.names.length; i++) {
//     for (let j = 0; j < sty.length; j++) {
//       if (sty[j] === this.names[i].id) {
//         const obj: any = {};
//         obj.id = this.names[i].id;
//         obj.first_name = this.names[i].first_name;
//         obj.last_name = this.names[i].last_name;
//
//         this.namesJ.push(obj);
//         console.log(obj);
//
//       }
//     }
//   }
// }

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
