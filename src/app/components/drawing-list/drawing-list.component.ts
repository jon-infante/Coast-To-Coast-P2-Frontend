import { Component, OnInit } from '@angular/core';
import { DrawingapiService } from 'src/app/services/drawingapi.service';
import { ActivatedRoute } from '@angular/router';
import { Drawing } from '../../models/drawing';
import { WallPostApiService } from 'src/app/services/wall-post-api.service';

@Component({
  selector: 'app-drawing-list',
  templateUrl: './drawing-list.component.html',
  styleUrls: ['./drawing-list.component.css']
})
export class DrawingListComponent implements OnInit {

  constructor(private drawingapiService: DrawingapiService, private route: ActivatedRoute, 
    private wallpostapiService: WallPostApiService) { }

  isWallPostPage = false;
  allDrawings: Drawing[] = [];
  keyword = ""
  ngOnInit(): void {
    this.route.params.subscribe(params => {
    // extract the id from route params (keyworD)
    this.keyword = params['id'];
    //If params are undefined, we get all the drawings fromt the list
    if((this.keyword == undefined)){
    this.drawingapiService.getAllDrawings().then((drawingArray) => 
    {
      drawingArray.forEach((drawing: any) => {
        var castedDrawing: Drawing = {
          ID: drawing.id,
          PlayerID: drawing.playerID,
          WallPostID: drawing.wallPostID,
          Keyword: drawing.keyword,
          BucketImage: drawing.bucketImage,
          Guess: drawing.guess,
          GoogleScore: drawing.googleScore,
          GoogleResponse: drawing.googleResponse,
          Likes: drawing.likes,
          Date: drawing.date,
          IsLiked: drawing.isLiked
        }
        this.allDrawings.push(castedDrawing)
      })
      console.log(this.allDrawings)
    
    })
  }
  //If we have a wallpost keyword as the params
  else{
    this.isWallPostPage = true;
    this.wallpostapiService.GetWallPostByKeyword(this.keyword).then((wallpost) => {
      wallpost.drawings.forEach((drawing: any) => {
        var castedDrawing: Drawing = {
          ID: drawing.id,
          PlayerID: drawing.playerID,
          WallPostID: drawing.wallPostID,
          Keyword: drawing.keyword,
          BucketImage: drawing.bucketImage,
          Guess: drawing.guess,
          GoogleScore: drawing.googleScore,
          GoogleResponse: drawing.googleResponse,
          Likes: drawing.likes,
          Date: drawing.date,
          IsLiked: drawing.isLiked
        }
        this.allDrawings.push(castedDrawing)
      })
    })
  }})
  }
  LikeDrawing(drawing: Drawing){
    drawing.IsLiked = !drawing.IsLiked
    console.log(this.drawingapiService.updateDrawing(drawing))
  } 
}
