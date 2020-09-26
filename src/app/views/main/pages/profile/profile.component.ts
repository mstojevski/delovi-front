import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId;
  user$: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.user$ = this.profileService.getUser(this.userId);
  }

}
