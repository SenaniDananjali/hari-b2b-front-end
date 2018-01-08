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
  job: Job[] = [];
  loc: Preferred[];
  locForSearch: LocForSearch[];
  full: Full[];
  // namesCommon: NamesCommon[] = [];
  // namesJ: NamesJ[] = [];

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
      // this.locationToStylist(this.query.location);
      // this.dupNames(this.stylistFromLoc);
    });

    this.dataService.getLocationsForSearch().subscribe((locForSearch) => {
      this.locForSearch = locForSearch;
      console.log(this.locForSearch);
    });

    this.route.queryParams.subscribe(v => {
      this.query = v;

      this.dataService.getFullDetails().subscribe((full) => {
        this.full = full;
        console.log(this.query.location);
        for (let i = 0; i < this.full.length; i++) {
          if (this.query.location === full[i].loc) {
            const obj: any = {};
            obj.id = this.full[i].sty_id;
            obj.first_name = this.full[i].first_name;
            obj.last_name = this.full[i].last_name;
            // for (let j = 0; j < this.namesSk.length + 1; j++) {
            // console.log(this.namesSk);
            // if (this.namesSk[j].id  !== obj.id) {
            if (this.namesSk.includes(obj)) {
              console.log(this.namesSk.includes(obj));
            }else {
              console.log(this.namesSk.includes(obj))
              this.namesSk.push(obj);
              console.log(obj);
              console.log(this.namesSk.includes(obj));
            }
            // }
            // }
            // console.log(this.namesSk.includes());
          }
        }
      });


    });

    this.dataService.getFullDetails().subscribe((full) => {
      this.full = full;
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
