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
  // public @Input() currentuser: string;

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
      console.log(stylistSkills);
    });

    this.route.queryParams.subscribe(v => {
      this.query = v;
      console.log(this.query);
      // type,ss;
    });
  }


}

interface Names {
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
