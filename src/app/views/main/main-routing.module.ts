import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleAdComponent } from './pages/single-ad/single-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard} from '../../guards/auth.guard';
import { SingleAdService } from './pages/single-ad/service/single-ad.service';


const routes: Routes = [
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard],},
  { path: 'ad/:id', component: SingleAdComponent, canActivate: [AuthGuard],   resolve: { items: SingleAdService }
 },
  { path: 'ad-create',loadChildren: () => import('./pages/create-ad/create-ad.module').then(m => m.CreateAdModule), canActivate: [AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
