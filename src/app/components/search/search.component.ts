import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  posts: Posts[];

  constructor(private dataService: DataService) {

  }

  radioData = 'Stylist name';

  selected: boolean;
  search = ' ';


  ngOnInit() {
    this.selected = true;


  }


  onSearch() {

    console.log(this.search);
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });

  }

  advancedSearch() {

  }

}

interface Posts {
  id: number;
  first_name: string;
  last_name: string;
}
