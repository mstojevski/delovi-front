import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';


import { MainRoutingModule } from './main-routing.module';
import { SingleAdComponent } from './pages/single-ad/single-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdCreateComponent } from './pages/ad-create/ad-create.component';

@NgModule({
  declarations: [SingleAdComponent, ProfileComponent, AdCreateComponent],
  imports: [CommonModule, MainRoutingModule, NgImageSliderModule],
})
export class MainModule {}
