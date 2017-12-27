import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  posts: Posts[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }

}

interface Posts {
  id: number;
  first_name: string;
  last_name: string;
}
