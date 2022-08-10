import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private _title = "List of authors:"
  private _authors: string[] | undefined

  constructor(private authorService: AuthorService) { }

  get title(): string {
    return this._title
  }

  get authors(): string[] | undefined {
    return this._authors
  }

  ngOnInit(): void {
    this._authors = this.authorService.getAuthors()
  }
}
