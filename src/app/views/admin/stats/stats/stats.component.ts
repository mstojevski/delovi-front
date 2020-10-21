import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Subscription } from 'rxjs';
import { IAd } from 'src/app/models/ad.interface';
import { AdminService } from '../../service/admin.service';

@Component({
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {
  adSubscription: Subscription;
  sold = 0;
  active = 0;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero:true
          }
      }]
  },
  tooltips: { titleFontSize: 0 }

  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
   this.adSubscription = this.adminService.getAllAds().subscribe((data: IAd[]) => {
      this.sold = data.filter((one) => one.sold).length;
      this.active = data.filter((one) => !one.sold).length;
      this.barChartData = [
        { data: [this.active], label: 'Aktivni oglasi' },
        { data: [this.sold], label: 'Prodati' }
      ];
    })
  }
  ngOnDestroy() {
    this.adSubscription.unsubscribe();
  }
}
