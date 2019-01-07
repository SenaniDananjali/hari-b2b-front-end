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
  charges: Chargers[];
  // namesCommon: NamesCommon[] = [];
  // namesJ: NamesJ[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataService.getLocationsForSearch().subscribe((locForSearch) => {
      this.locForSearch = locForSearch;

    });


    this.dataService.getProfPic().subscribe((profPics) => {
      this.profPics = profPics;
    });
    // this.dataService.getFullDetails().subscribe((full) => {
    //   this.full = full;
    // });
    this.route.queryParams.subscribe(v => {
      this.query = v;
      console.log(this.namesSk);
    });

    this.dataService.getCharges(1).subscribe((charges) => {
      this.charges = charges;
      console.log(this.charges);
    });

    this.dataService.getFullDetails().subscribe((full) => {
      this.full = full;
      console.log(this.namesSk);

      for (let i = 0; i < this.full.length; i++) {
        const obj: any = {};
        obj.id = this.full[i].sty_id;
        obj.first_name = this.full[i].first_name;
        obj.last_name = this.full[i].last_name;
        if (this.isInclude(this.namesSk, obj)) {
        } else {
          this.namesSk.push(obj);
        }

      }
      console.log('initial this.namesSk');
      console.log(this.namesSk);
      this.dataService.getNames().subscribe((names) => {
        this.names = names;
      });

      this.dataService.getLocations().subscribe((loc) => {
        this.loc = loc;
      });
      this.dataService.getStylistSkills().subscribe((stylistSkills) => {
        this.stylistSkills = stylistSkills;
      });


      if (this.query.hasOwnProperty('location')) {
        this.dataService.getLocations().subscribe((loc) => {
          this.loc = loc;
          this.locationToStylist(this.query.location);
          this.dupNames(this.stylistFromLoc);
          this.filter();

          console.log('After filter by location');
          this.namesSk.map(value => {
            console.log(value.id + ' ' + value.first_name);
          });

          if (this.query.hasOwnProperty('ss')) {
            this.dataService.getStylistSkills().subscribe((stylistSkills) => {
              this.stylistSkills = stylistSkills;
              this.skillToStylist(this.query.ss);


              console.log('After skillToStylist in skill');
              this.stylistFromSkill.map(value => {
                console.log(value + '');
              });

              this.dupNames(this.stylistFromSkill);

              console.log('After dupNames in skill');
              this.namesTest.map(value => {
                console.log(value.id + ' ' + value.first_name);
              });

              this.filter();

              console.log('After filter by skill');
              this.namesSk.map(value => {
                console.log(value.id + ' ' + value.first_name);
              });

              if (this.query.hasOwnProperty('job')) {
                this.dataService.getStylistJob().subscribe((job) => {
                  this.job = job;

                  this.jobToStylist(this.query.job);
                  this.dupNames(this.stylistFromJob);
                  this.filter();
                });
              }
            });
          } else {

            if (this.query.hasOwnProperty('job')) {
              this.dataService.getStylistJob().subscribe((job) => {
                this.job = job;

                this.jobToStylist(this.query.job);
                this.dupNames(this.stylistFromJob);
                this.filter();
              });
            }
          }


        });
      } else {
        if (this.query.hasOwnProperty('ss')) {
          this.dataService.getStylistSkills().subscribe((stylistSkills) => {
            this.stylistSkills = stylistSkills;
            this.skillToStylist(this.query.ss);
            this.dupNames(this.stylistFromSkill);
            this.filter();

            if (this.query.hasOwnProperty('job')) {
              this.dataService.getStylistJob().subscribe((job) => {
                this.job = job;

                this.jobToStylist(this.query.job);
                this.dupNames(this.stylistFromJob);
                this.filter();
              });
            }
          });
        } else {

          if (this.query.hasOwnProperty('job')) {
            this.dataService.getStylistJob().subscribe((job) => {
              this.job = job;

              this.jobToStylist(this.query.job);
              this.dupNames(this.stylistFromJob);
              this.filter();
            });
          }
        }
      }

      this.removeDuplicates();
      console.log('when remove the duplicates');
      console.log(this.namesSk);

    });


  }

  removeDuplicates() {
    let current = this.namesSk[0];
    const arr: NamesSk[] = this.namesSk;
    const len = this.namesSk.length;
    this.namesSk = [];
    let found = false;
    for (let i = 0; i < len; i++) {
      if (current.id === arr[i].id && !found) {
        found = true;
      } else if (current.id !== arr[i].id) {
        current = arr[i];
        found = false;
        console.log(arr[i]);
        this.namesSk.push(current);
      }
    }
  }

  filter() {
    console.log('=============================================== Start');

    console.log('---------- this.nameSk start --------------');

    console.log(this.namesSk + '');
    console.log(this.namesSk.length);

    console.log('---------- this.nameSk end --------------');


    const test: NamesTest[] = this.namesSk.map(value => {
      return value;
    });

    console.log('---------- test start --------------');

    console.log(test + '');
    console.log(test.length);

    console.log('---------- test end --------------');


    console.log(' splice this.namesSk ');
    const len = this.namesSk.length;
    this.namesSk.splice(0, len);

    console.log('---------- After splice this.nameSk start --------------');

    console.log(this.namesSk + '');
    console.log(this.namesSk.length);

    console.log('---------- After splice this.nameSk end --------------');

    console.log('---------- After splice :  test start --------------');

    console.log(test + '');
    console.log(test.length);

    console.log('---------- After splice : test end --------------');

    //
    for (let i = 0; i < this.namesTest.length; i++) {
      for (let j = 0; j < test.length; j++) {
        if (this.namesTest[i].id === test[j].id && !this.isContainsInNamesSk(test[j].id)) {
          this.namesSk.push(test[j]);
          break;
        }
      }
    }
    // console.log(this.namesSk);
    console.log('=============================================== End');
  }

  isContainsInNamesSk(val) {
    for (let i = 0; i < this.namesSk.length; i++) {
      if (this.namesSk[i].id === val.id) {
        return true;
      }
    }
    return false;
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
    const len = this.namesTest.length;
    this.namesTest.splice(0, len);
    for (let i = 0; i < this.namesSk.length; i++) {
      for (let j = 0; j < sty.length; j++) {
        if (sty[j] === this.namesSk[i].id) {
          const obj: any = {};
          obj.id = this.namesSk[i].id;
          obj.first_name = this.namesSk[i].first_name;
          obj.last_name = this.namesSk[i].last_name;

          this.namesTest.push(obj);

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

interface Chargers {
  sty_id: number;
  slot: string;
  charge: number;
  currency: string;

}
