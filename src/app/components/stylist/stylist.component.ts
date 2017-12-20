import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stylist',
  templateUrl:'./stylist.component.html',
  styleUrls: ['./stylist.component.css']
})
export class StylistComponent implements OnInit {
  skills: string[];
  amount: number;
  currency: string;
  galleryPath: string[];

  constructor() {
  }

  ngOnInit() {
    this.skills = ['Hair Dressing', 'Hair Coloring', 'Perming', 'men/women hair cutting'];
    this.amount = 150;
    this.currency = '$';
    this.galleryPath=['../../../assets/galery1.jpg', '../../../assets/galery2.jpg', '../../../assets/galery5.jpg', '../../../assets/galery3.jpg', '../../../assets/galery6.jpg', '../../../assets/galery7.jpg', '../../../assets/galery4.jpg'];

  }

}
