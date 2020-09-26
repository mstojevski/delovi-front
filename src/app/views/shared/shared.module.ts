import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './components/ad/ad.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AdComponent],
  imports: [CommonModule, RouterModule],
  exports: [AdComponent],
})
export class SharedModule {}
