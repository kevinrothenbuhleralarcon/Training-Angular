import { Component } from '@angular/core';
import { fade } from '../animations/fade';
import { slide } from '../animations/slide';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    slide
  ]
})
export class TodosComponent {
  todos: string[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'
  ]

  constructor() { }

  add(input: HTMLInputElement) {
    this.todos.splice(0, 0, input.value)
    input.value = ""
  }

  delete(todo: string) {
    const index = this.todos.indexOf(todo)
    if (index !== undefined) this.todos.splice(index, 1)
  }
}
