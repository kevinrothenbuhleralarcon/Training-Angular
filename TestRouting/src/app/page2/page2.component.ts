import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  home(): void {
    this.router.navigate(['']);
  }

  p1(): void {
    this.router.navigate(['p1']);
  }

  p3(): void {
    this.router.navigate(['..', 'p3'], {relativeTo: this.activatedRoute});
  }

}
