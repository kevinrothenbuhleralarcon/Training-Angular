import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categoryOptions = [
    {id: 1, name:"Development"},
    {id: 2, name:"Art"},
    {id: 3, name:"Language"},
  ]

  submit(course: NgForm) {
    console.log(course.value)
  }
}
