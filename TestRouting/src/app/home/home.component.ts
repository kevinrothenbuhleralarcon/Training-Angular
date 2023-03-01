import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate($event: Event): void {
    const id = ($event.target as HTMLButtonElement).id;
    this.router.navigate([`/${id}`]);
  }

  navigateSub($event: Event): void {
    const id = ($event.target as HTMLButtonElement).id;
    this.router.navigate(['/sub/' + id]);
  }

}
