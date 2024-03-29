import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SingleAdComponent } from './pages/single-ad/single-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {StepsModule} from 'primeng/steps';
import { CreateAdModule } from './pages/create-ad/create-ad.module';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import { GravatarModule } from 'ngx-gravatar';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryModule } from 'ng-gallery';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './pages/home/home.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {RatingModule} from 'primeng/rating';


@NgModule({
  declarations: [SingleAdComponent, ProfileComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    StepsModule,
    TableModule,
    GravatarModule,
    GalleriaModule,
    GalleryModule,
    NgSelectModule,
    ConfirmDialogModule,
    RatingModule,
    FormsModule

  ],
  providers: [ConfirmationService]

})
export class MainModule {}
