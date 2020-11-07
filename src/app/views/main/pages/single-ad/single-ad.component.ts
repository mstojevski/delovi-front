import { Component } from '@angular/core';
import { SingleAdService } from './service/single-ad.service';
import { AuthService } from '../../../../auth.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './single-ad.component.html',
  styleUrls: ['./single-ad.component.scss'],
})
export class SingleAdComponent {
  currentUser = this.auth.currentUserId;
  constructor(
    public adService: SingleAdService,
    private auth: AuthService,
    private route: Router,
    private confirmationService: ConfirmationService,
    private toast: ToastrService
  ) {}

  setStatusToSold(id: string) {
    this.confirmationService.confirm({
      message: 'Oglas više neće biti vidljiv na sajtu',
      accept: () => {
        this.adService.setStatusSold(id).subscribe(() => {
          this.toast.success('Uspešno ste sklonili oglas')
          this.route.navigate(['/']);
        }, (err) => {
          this.toast.error('Ooops došlo je do greške');
        });
      },
    });

  }
}
