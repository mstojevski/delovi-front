import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleAdComponent } from './pages/single-ad/single-ad.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleAdService } from './pages/single-ad/service/single-ad.service';
import { HomeComponent } from './pages/home/home.component';
import { HomeService } from './pages/home/service/home.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: { ads: HomeService }
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,

      },
      {
        path: 'ad/:id',
        component: SingleAdComponent,
        resolve: { items: SingleAdService },
      },
      {
        path: 'ad-create',
        loadChildren: () =>
          import('./pages/create-ad/create-ad.module').then(
            (m) => m.CreateAdModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
