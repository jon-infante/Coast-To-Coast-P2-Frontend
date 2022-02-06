import { Component, OnInit } from '@angular/core';
import { Amazons3Service } from 'src/app/services/amazons3.service';
import { DrawingapiService } from 'src/app/services/drawingapi.service';
import { GooglevisionService } from '../../services/googlevision.service';
import { Drawing } from '../../models/drawing';

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.css']
})
export class CanvasPageComponent implements OnInit {
  //api key params
  isLoaded = false;
  googleResponse = [{"description": "null",
                  "mid": "null",
                  "score": 0,
                  "topicality": 0}]

  constructor(private googlevision: GooglevisionService, private amazons3: Amazons3Service, private drawingapi: DrawingapiService) { }

  ngOnInit(){
    }

  //Saves the current canvas as data uri image
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
    //Generate random id to differentiate files
    let id = (Math.random() + 1).toString(20).substring(3);
    var dataBlob =  new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
    var fileOfBlob = new File([dataBlob], `${id}`);
    return fileOfBlob

  }

  //Clears the canvas
  clearCanvas(){
    var canvas = document.getElementById('appCanvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    context!.clearRect(0, 0, canvas.width, canvas.height);
    //Empty means there is no data to process
    this.googleResponse = [{"description": "null",
                        "mid": "null",
                        "score": 0,
                        "topicality": 0}]
    this.isLoaded = false
    console.log("cleared")
  }

  //Submits the saved drawing to google vision for analysis
  submitDrawing(image: any){
      this.googlevision.submitDrawingToGoogle(image).then((response: any) =>
      {
        var res = JSON.stringify(response);
        var resJson = JSON.parse(res);
        this.googleResponse = resJson.responses[0].labelAnnotations
        this.isLoaded = true;
        console.log(this.googleResponse);
      })
  }

  addDrawingToDatabase(imageBucketLink: any){
    //Current date and time
    var date = new Date().toString();
    //hard coded data for now
    var drawing: Drawing = {
      ID: 0,
      PlayerID: 3,
      WallPostID: 2,
      Keyword: "cat",
      BucketImage: imageBucketLink,
      Guess: true,
      GoogleScore: 98,
      GoogleResponse: "cat",
      Likes: [],
      Date: date
    }
    this.drawingapi.addDrawing(drawing).then((res) => {
      console.log(res)
    })
  }

  uploadImageToS3AndDatabase(){
    var image = this.saveImage();
    //Submits drawing to google vision api for response
    this.submitDrawing(image)
    //Convert the image to a data blob png
    var imageBlob = this.dataURItoBlob(image);
    //Returns the S3 bucket link we uploaded the image to
    this.amazons3.uploadFileToS3Bucket(imageBlob).then((response: any) => {
      var imageLocation = JSON.stringify(response.Location).slice(1,-1)
      console.log(imageLocation)
      //Adds drawing to elephant sql database
      this.addDrawingToDatabase(imageLocation)
    })
  }
}
