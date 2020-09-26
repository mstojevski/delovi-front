import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { MainModule } from './views/main/main.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './views/shared/shared.module';
import { CreateAdModule } from './views/main/pages/create-ad/create-ad.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgSelectModule,
    AppRoutingModule,
    MainModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SharedModule,
    CreateAdModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
