import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartsModule } from 'ng2-charts';
import { StatsComponent } from './stats/stats/stats.component';



@NgModule({
  declarations: [AdminComponent, StatsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    ChartsModule

  ]
})
export class AdminModule { }
