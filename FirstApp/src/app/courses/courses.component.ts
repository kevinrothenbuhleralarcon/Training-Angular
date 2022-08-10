import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private _title = "List of courses:"
  private _courses: string[] | undefined

  constructor(private courseService: CourseService) { }

  get title(): string {
    return this._title
  }

  get courses(): string[] | undefined {
    return this._courses
  }

  ngOnInit(): void {
    this._courses = this.courseService.getCourses()
  }

}
