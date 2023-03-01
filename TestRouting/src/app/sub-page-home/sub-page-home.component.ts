import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sub-page-home',
  templateUrl: './sub-page-home.component.html',
  styleUrls: ['./sub-page-home.component.css']
})
export class SubPageHomeComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  p2(): void {
    this.router.navigate(['p2'], {relativeTo: this.activatedRoute});
  }

  p3(): void {
    this.router.navigate(['p3'], {relativeTo: this.activatedRoute});
  }
}
