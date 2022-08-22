import { Component, OnInit } from '@angular/core';
import { Follower } from '../model/follower';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  followers: Follower[] | undefined

  constructor(private followerService: FollowerService) { }

  ngOnInit(): void {
    this.followerService.getAll()
      .subscribe({
        next: followers => this.followers = followers
      })
  }

}
