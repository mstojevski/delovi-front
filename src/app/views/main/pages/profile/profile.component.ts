import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAd } from 'src/app/models/ad.interface';
import { ProfileService, IUserInfo } from './service/profile.service';
import { AuthService } from '../../../../auth.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentLogin: string;
  currentId: string;
  ratingForm = new FormGroup({
    rating: new FormControl(null, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    ad: new FormControl(null, Validators.required),
  });
  user$: Observable<IUserInfo>;
  ads$: Observable<IAd[]>;
  selectedAdTitle: string;
  selectedAdId: string;
  constructor(private route: Router,  private activatedRoute: ActivatedRoute, public profileService: ProfileService, private auth: AuthService) { }

  navigateToCreateAd() {
    this.route.navigate(['ad-create'])
  }
  ngOnInit(): void {
    this.currentLogin = this.auth.currentUserId;
    this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user$ = this.profileService.getUser(this.currentId);
    this.ads$ = this.profileService.loadData(this.currentId);
  }
  get rating() {
    return this.ratingForm.get('rating');
  }

  get ad() {
    return this.ratingForm.get('ad');
  }

  get description() {
    return this.ratingForm.get('description');
  }
  rate() {
    if(this.ratingForm.invalid) {
      return;
    }
    this.profileService.rate({rating: this.rating.value, description: this.description.value, reviewerId: this.currentLogin, reviewerName: this.auth.currentUserName, adTitle: this.selectedAdTitle, adId: this.selectedAdId }, this.currentId).subscribe()
    // this.profileService.vote(this.currentLogin).subscribe();
    this.ratingForm.reset();
  }
  selected(event) {
    this.selectedAdId = event._id;
    this.selectedAdTitle = event.title;
  }
}
