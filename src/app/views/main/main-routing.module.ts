import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleAdComponent } from './pages/single-ad/single-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdCreateComponent } from './pages/ad-create/ad-create.component';
import { AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  { path: 'profile/:id', component: ProfileComponent,   canActivate: [AuthGuard],},
  { path: 'ad/:id', component: SingleAdComponent, canActivate: [AuthGuard] },
  { path: 'ad-create', component: AdCreateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
