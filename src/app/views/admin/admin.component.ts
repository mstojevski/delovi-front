import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAd } from 'src/app/models/ad.interface';
import { AdminService } from './service/admin.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';



@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  ads$: Observable<IAd[]> = this.adminService.ads$
  constructor(private adminService: AdminService) { }
  changeStatus() {

  }
  deleteAd(id:string) {
    this.adminService.deleteAd(id).subscribe();
  }
  ngOnInit(): void {
    this.adminService.getAd().subscribe();
  }

}
