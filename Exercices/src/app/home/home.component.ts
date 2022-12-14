import { Component, OnInit } from '@angular/core';
import { Archive } from '../model/archive';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives: Archive[] = [
    { year: 2017, month: 1 },
    { year: 2017, month: 2 },
    { year: 2017, month: 3 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
