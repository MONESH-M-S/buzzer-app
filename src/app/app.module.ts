import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from './primeng.module';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { MessageService } from 'primeng/api';
import { UserComponent } from './user/user.component';
import { DatePipe } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AdminComponent, UserComponent, AdminLoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MessageService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
