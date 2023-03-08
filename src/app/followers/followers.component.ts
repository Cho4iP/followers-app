import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { combineLatest, map, Observable, of, pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit{
  followers: any;
  constructor(private service: FollowersService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .subscribe(
        combinedObs => {
          let id = combinedObs[0].get('id');
          let page = combinedObs[1].get('page');

          //this.service.getAll(page).subscribe();

          this.service.getAll()
            .subscribe(followers => { this.followers = followers; });
        }
      );
    
  }

}
