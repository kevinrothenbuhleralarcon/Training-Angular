import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Archive } from '../model/archive';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  archive: Archive | undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const year = params.get("year")
      const month = params.get("month")
      if (year && month) {
        this.archive =  {
          year: +year,
          month: +month
        }
      }
    })
  }

  viewAll() {
    this.router.navigate([""])
  }

}
