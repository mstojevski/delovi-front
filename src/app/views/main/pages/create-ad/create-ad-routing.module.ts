import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdBasicInfoComponent } from './steps/ad-basic-info/ad-basic-info.component';
import { MoreInfoComponent } from './steps/more-info/more-info.component';
import { UploadImagesComponent } from './steps/upload-images/upload-images.component';
import { CreateAdComponent } from './create-ad.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAdComponent,
    children: [
      {path:'', redirectTo: 'info', pathMatch: 'full'},
      { path: 'info', component: AdBasicInfoComponent },
      { path: 'more-info', component: MoreInfoComponent },
      { path: 'upload-images', component: UploadImagesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAdRoutingModule {}
