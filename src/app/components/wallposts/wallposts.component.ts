import { Component, OnInit } from '@angular/core';
import { Wallpost } from 'src/app/models/wallpost';
import { WallPostApiService } from 'src/app/services/wall-post-api.service';

@Component({
  selector: 'app-wallposts',
  templateUrl: './wallposts.component.html',
  styleUrls: ['./wallposts.component.css']
})
export class WallpostsComponent implements OnInit {

  constructor(private apiService: WallPostApiService) {

    
  }

  ngOnInit(): void {
    this.apiService.GetAllWallPosts().then((res) => 
    {
      console.log(res);
    })
  }

}
