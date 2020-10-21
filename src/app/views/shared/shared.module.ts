import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './components/ad/ad.component';
import { RouterModule } from '@angular/router';
import { ProfileCardComponent } from './components/ad/profile-card/profile-card.component';
import { GravatarModule } from 'ngx-gravatar';

@NgModule({
  declarations: [AdComponent, ProfileCardComponent],
  imports: [CommonModule, RouterModule, GravatarModule],
  exports: [AdComponent, ProfileCardComponent],
})
export class SharedModule {}
