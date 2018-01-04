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
  namesSk: NamesSk[] = [];
  job: Job[] = [];
  loc: LocForSearch [];


  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.dataService.getNames().subscribe((names) => {
      this.names = names;
    });
    this.dataService.getProfPic().subscribe((profPics) => {
      this.profPics = profPics;
    });

    this.dataService.getStylistSkills().subscribe((stylistSkills) => {
      this.stylistSkills = stylistSkills;
      this.skillToStylist(this.query.ss);
      this.dupNames(this.stylistFromSkill);
    });

    this.dataService.getStylistJob().subscribe((job) => {
      this.job = job;
    });
    this.dataService.getLocationsForSearch().subscribe((loc) => {
      this.loc = loc;
    });


    this.route.queryParams.subscribe(v => {
      this.query = v;
      console.log(this.query);
      // type,ss;
    });
  }

  skillToStylist(skill) {
    for (let i = 0; i < this.stylistSkills.length; i++) {
      if (skill === this.stylistSkills[i].skill) {
        this.stylistFromSkill.push(this.stylistSkills[i].id);
      }
    }
  }

  // locationToStylist(loc) {
  //   for (let i = 0; i < this..length; i++) {
  //     if (skill === this.stylistSkills[i].skill) {
  //       this.stylistFromSkill.push(this.stylistSkills[i].id);
  //     }
  //   }
  // }

  dupNames(sty: any[]) {
    for (let i = 0; i < this.names.length; i++) {
      for (let j = 0; j < sty.length; j++) {
        if (sty[j] === this.names[i].id) {
          const obj{};
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

interface LocForSearch{

}

interface ProfileFullDetails{

}
