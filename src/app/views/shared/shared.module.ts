import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './components/ad/ad.component';
import { RouterModule } from '@angular/router';
import { GravatarModule } from 'ngx-gravatar';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [AdComponent, ProfileCardComponent],
  imports: [CommonModule, RouterModule, GravatarModule],
  exports: [AdComponent, ProfileCardComponent],
})
export class SharedModule {}
