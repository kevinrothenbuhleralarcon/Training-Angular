import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AppError, BadInput, NotFoundError } from '../common/app-error';

export class DataService<T> {
  
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get<T[]>(this.url)
        .pipe(catchError(this.handleError))
  }

  create(resource: T) {
    return this.http.post<T>(
        this.url,
        JSON.stringify(resource)
    ).pipe(catchError(this.handleError))
  }

  update(resource: T, id: number) {
    return this.http.put<T>(
        this.url + "/" + id,
        JSON.stringify(resource)
    ) .pipe(catchError(this.handleError))
  }

  delete(id: number) {
    return this.http.delete<T>(this.url + "/" + id)
        .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string

    if (error.status === 0) {
        errorMessage = `An error occured ${error.message}` 
    } else if (error.status === 400) {
        return throwError(() => new BadInput)
    } else if (error.status === 404) {
        return throwError(() => new NotFoundError)
    } else {
        errorMessage = `Backend returned code: ${error.status}`
    }

    return throwError(() => new AppError(errorMessage))
  }
}
