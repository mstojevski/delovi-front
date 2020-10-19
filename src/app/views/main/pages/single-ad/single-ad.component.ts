import { Component } from '@angular/core';
import { SingleAdService } from './service/single-ad.service';
import { AuthService } from '../../../../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.scss']
})
export class SingleAdComponent {
  currentUser = this.auth.currentUserId;
  imageObject = [{
    image: 'https://cdn-jaguarlandrover.com/api/v1/image/13820/w/680.jpg',
    thumbImage: 'https://cdn-jaguarlandrover.com/api/v1/image/13820/w/680.jpg',
}, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg62R5k02T5jzJDhyhe0YeJnXv2-i5epa1ZA&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg62R5k02T5jzJDhyhe0YeJnXv2-i5epa1ZA&usqp=CAU'
}];
  constructor(public adService: SingleAdService, private auth:AuthService, private route: Router ) { }

  setStatusToSold(id: string) {
    this.adService.setStatusSold(id).subscribe(() => {
      this.route.navigate(['home'])
    });
  }

}
