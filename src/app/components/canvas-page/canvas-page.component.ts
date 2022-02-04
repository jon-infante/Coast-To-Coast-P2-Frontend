import { Component, OnInit } from '@angular/core';

import { GooglevisionService } from '../../services/googlevision.service';




@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.css']
})
export class CanvasPageComponent implements OnInit {
  //api key params
  isLoaded = {}
  googleResponse = [{"description": "null",
                  "mid": "null",
                  "score": 0,
                  "topicality": 0}]

  constructor(private googlevision: GooglevisionService) { }

  ngOnInit(){
    }

  //Saves the current canvas as data url image
  saveImage(){
    var canvas = document.getElementById('appCanvas') as HTMLCanvasElement;
    var image = canvas.toDataURL("image/png");
    return image
  }

  clearCanvas(){
    var canvas = document.getElementById('appCanvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    context!.clearRect(0, 0, canvas.width, canvas.height);
    //Empty means there is no data to process
    this.  googleResponse = [{"description": "null",
                        "mid": "null",
                        "score": 0,
                        "topicality": 0}]
    this.isLoaded = {}
    console.log("cleared")
  }
  //Submits the saved drawing to google vision for analysis
  submitDrawing(){
    var image = this.saveImage();
      this.googlevision.submitDrawingToGoogle(image).then((response) =>
      {
        var res = JSON.stringify(response);
        var resJson = JSON.parse(res);
        this.googleResponse = resJson.responses[0].labelAnnotations
        this.isLoaded = {"filler": 1};
        console.log(this.googleResponse);
      })
  }

}
