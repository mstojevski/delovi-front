import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAd } from 'src/app/models/ad.interface';
import { AdminService } from './service/admin.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  ads$: Observable<IAd[]> = this.adminService.ads$;
  constructor(
    private adminService: AdminService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.adminService.getAd().subscribe();
  }
  deleteAd(id: string) {
    this.confirmationService.confirm({
      message: 'Vaš oglas nece biti dostupan na sajtu',
      accept: () => {
        this.adminService.deleteAd(id).subscribe();
      },
    });
  }
  updateAd(id: string) {
    this.confirmationService.confirm({
      message: 'Oglas ce dobiti status prodat',
      accept: () => {
        this.adminService.updateStatus(id).subscribe();
      },
    });
  }
}
