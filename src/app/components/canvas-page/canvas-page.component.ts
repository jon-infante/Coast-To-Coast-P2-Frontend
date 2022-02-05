import { Component, OnInit } from '@angular/core';
import { Amazons3Service } from 'src/app/services/amazons3.service';
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

  constructor(private googlevision: GooglevisionService, private amazons3: Amazons3Service) { }

  ngOnInit(){
    }

  //Saves the current canvas as data url image
  saveImage(){
    var canvas = document.getElementById('appCanvas') as HTMLCanvasElement;
    var image = canvas.toDataURL("image/png");
    return image
  }
  //returns the saved uri image as a data blob to be sent to amazon's s3 bucket
  dataURItoBlob(dataURI: any) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }
  //Clears the canvas
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
      this.googlevision.submitDrawingToGoogle(image).then((response: any) =>
      {
        var res = JSON.stringify(response);
        var resJson = JSON.parse(res);
        this.googleResponse = resJson.responses[0].labelAnnotations
        this.isLoaded = {"filler": 1};
        console.log(this.googleResponse);
      })
      //Convert the image to a data blob png
      var imageBlob = this.dataURItoBlob(image);
      //Returns the S3 bucket link we uploaded the image to
      var s3BucketLink = this.amazons3.uploadFileToS3Bucket(imageBlob)
      console.log(s3BucketLink);
  }


}
