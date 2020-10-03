import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAdRoutingModule } from './create-ad-routing.module';
import { AdBasicInfoComponent } from './steps/ad-basic-info/ad-basic-info.component';
import { UploadImagesComponent } from './steps/upload-images/upload-images.component';
import { MoreInfoComponent } from './steps/more-info/more-info.component';
import { CreateAdComponent } from './create-ad.component';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    AdBasicInfoComponent,
    MoreInfoComponent,
    UploadImagesComponent,
    CreateAdComponent,
  ],
  imports: [
    CommonModule,
    CreateAdRoutingModule,
    StepsModule,
    CardModule,
    ButtonModule,
    FileUploadModule,
    CheckboxModule,
    ReactiveFormsModule,
    NgSelectModule,

  ],
})
export class CreateAdModule {}
