import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: IUser;
  @Input() _id: string;
  @Input() hasVote: boolean;
  @Input() showAds = true;
  constructor() { }

  ngOnInit(): void {
  }

}
