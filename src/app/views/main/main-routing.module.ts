import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleAdComponent } from './pages/single-ad/single-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdCreateComponent } from './pages/ad-create/ad-create.component';

const routes: Routes = [
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'ad/:id', component: SingleAdComponent },
  { path: 'ad-create', component: AdCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
