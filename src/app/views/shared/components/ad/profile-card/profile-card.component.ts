import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../../../auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() user: IUser;
  @Input() favorite: boolean;
  @Input() _id: string;
  @Input() hasVote: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
