import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { FollowerComponent } from './follower/follower.component';
import { FollowerService } from './services/follower.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    ChangePasswordFormComponent,
    FollowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FollowerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
