import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  names: Names[];
  gallery: Gallery[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getNames().subscribe((names) => {
      this.names = names;
      console.log(names);
    });
    this.dataService.getGallery().subscribe((gallery) => {
      this.gallery = gallery;
      console.log(gallery);
    });
  }

}

interface Names {
  id: number;
  first_name: string;
  last_name: string;

}

interface Gallery {
  id: number;
  image_path: string;
}
