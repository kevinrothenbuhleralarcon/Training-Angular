import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AppError, BadInput, NotFoundError } from '../common/app-error';
import { Follower } from '../model/follower';
import { FollowerDTO } from './follower-dto';

@Injectable({
  providedIn: 'root'
})
export class FollowerService {

  private url = "https://api.github.com/users/mosh-hamedani/followers"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Follower[]> {
    return this.http.get<FollowerDTO[]>(this.url)
      .pipe(map(followerDto => this.toFollowers(followerDto)))
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

  private toFollowers(followersDto: FollowerDTO[]): Follower[] {
    return followersDto.map(this.toFollower)
  }

  private toFollower(followerDto: FollowerDTO): Follower {
    return {
      avatar: followerDto.avatar_url,
      username: followerDto.login,
      url: followerDto.html_url
    }
  }
}
