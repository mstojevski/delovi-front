import { Component } from '@angular/core';
import { SingleAdService } from './service/single-ad.service';
import { AuthService } from '../../../../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.scss'],
})
export class SingleAdComponent {
  currentUser = this.auth.currentUserId;
  constructor(
    public adService: SingleAdService,
    private auth: AuthService,
    private route: Router
  ) {}

  setStatusToSold(id: string) {
    this.adService.setStatusSold(id).subscribe(() => {
      this.route.navigate(['/']);
    });
  }
}
