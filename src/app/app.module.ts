import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { MainModule } from './views/main/main.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdComponent } from './views/components/ad/ad.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdComponent,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule, NgSelectModule, AppRoutingModule,  MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
