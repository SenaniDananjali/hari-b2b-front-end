import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  amount: number;
  currency: string;
  galleryPath: string[];
  query: any;
  profPics: ProfPics[];
  stylistSkills: StylistSkills[];
  names: Names[];

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(v => {
      this.query = v;
      // console.log(this.query.id);
    });

    this.amount = 150;
    this.currency = '$';
    this.galleryPath = ['../../../assets/galery5.jpg', '../../../assets/galery6.jpg', '../../../assets/galery7.jpg', '../../../assets/galery1.jpg', '../../../assets/galery2.jpg', '../../../assets/galery5.jpg', '../../../assets/galery3.jpg'];

    this.dataService.getProfPic().subscribe((profPics) => {
      this.profPics = profPics;
    });
    this.dataService.getStylistSkills().subscribe((stylistSkills) => {
      this.stylistSkills = stylistSkills;
      // console.log(stylistSkills.des);
    });

  }


}

interface ProfPics {
  id: number;
  profile_id: number;
  image_path: string;
}

interface StylistSkills {
  id: number;
  skill: number;

}

interface Names {
  id: number;
  first_name: string;
  last_name: string;
  description: string;
}
