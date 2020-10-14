import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleAdService } from './service/single-ad.service';

@Component({
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.scss']
})
export class SingleAdComponent implements OnInit {
  imageObject = [{
    image: 'https://cdn-jaguarlandrover.com/api/v1/image/13820/w/680.jpg',
    thumbImage: 'https://cdn-jaguarlandrover.com/api/v1/image/13820/w/680.jpg',
}, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg62R5k02T5jzJDhyhe0YeJnXv2-i5epa1ZA&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg62R5k02T5jzJDhyhe0YeJnXv2-i5epa1ZA&usqp=CAU'
}];
  constructor(public adService: SingleAdService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }

}
