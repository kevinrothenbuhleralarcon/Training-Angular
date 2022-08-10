import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorService } from './author.service';
import { AuthorsComponent } from './authors.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { CourseService } from './course.service';
import { CourseComponent } from './courses.component';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    CourseComponent,
    AuthorsComponent,

    // Directives
    AutoGrowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService, 
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
