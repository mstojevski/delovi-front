import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService, IUserInfo } from './profile.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: Observable<IUserInfo>;
  ads$: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user$ = this.profileService.getUser(userId);
    this.ads$ = this.profileService.getAdsFromUser(userId);
  }

}
