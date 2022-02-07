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
  allWallpost: Wallpost[] = [];


  ngOnInit(): void {
    this.apiService.GetAllWallPosts().then((wallpostArray) => 
    {
      wallpostArray.forEach((wallpost: any) => {
        var castedWallpost: Wallpost = {
          ID: wallpost.id,
          CategoryID: wallpost.categoryID,
          Keyword: wallpost.keyword,
          Drawings: wallpost.drawings
        }
        this.allWallpost.push(castedWallpost)
      })
      console.log(wallpostArray)
    })
  }
}

  


