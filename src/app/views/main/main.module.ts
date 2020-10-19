import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { MainRoutingModule } from './main-routing.module';
import { SingleAdComponent } from './pages/single-ad/single-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {StepsModule} from 'primeng/steps';
import { CreateAdModule } from './pages/create-ad/create-ad.module';
import { GravatarModule } from 'ngx-gravatar';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [SingleAdComponent, ProfileComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    StepsModule,
    TableModule,
    CreateAdModule,
    GravatarModule
  ],

})
export class MainModule {}
