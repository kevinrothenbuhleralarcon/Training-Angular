import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  template:`
  <h1>My First Angular 2 App</h1>
  <courses></courses>
  <authors></authors>
  `,  
})
export class AppComponent {
  title = 'Ex-AddAuthor';
}