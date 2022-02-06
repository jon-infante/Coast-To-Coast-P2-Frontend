import { Component, OnInit } from '@angular/core';
import { DrawingapiService } from 'src/app/services/drawingapi.service';

import { Drawing } from '../../models/drawing';


@Component({
  selector: 'app-drawing-list',
  templateUrl: './drawing-list.component.html',
  styleUrls: ['./drawing-list.component.css']
})
export class DrawingListComponent implements OnInit {

  constructor(private drawingapiService: DrawingapiService) { }

  allDrawings: Drawing[] = [];
  id = 3
  ngOnInit(): void {
    this.drawingapiService.getAllDrawingsByPlayerID(this.id).then((drawingArray) => 
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
        }
        this.allDrawings.push(castedDrawing)
      })
      console.log(this.allDrawings)
    })
  }

}
