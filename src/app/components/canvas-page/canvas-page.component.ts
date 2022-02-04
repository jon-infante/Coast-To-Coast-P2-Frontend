import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.css']
})
export class CanvasPageComponent implements OnInit {

  constructor() { }
  //Saves the current canvas as data url image
  saveImage(){
    var canvas = document.getElementById('appCanvas') as HTMLCanvasElement;
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    return image
  }

  clearCanvas(){
    var canvas = document.getElementById('appCanvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    context!.clearRect(0, 0, canvas.width, canvas.height);
    console.log("cleared")
  }
  //Submits the saved drawing to google vision for analysis
  // submitDrawing(){
  //   var image = this.saveImage()

  //   const vision = require("@google-cloud/vision")

  //   const client = new vision.ImageAnnotatorClient()
  //   //   keyFilename: "../../../../droogle-key.json"
  //   // })

  //   client
  //     .labelDetection(image)
  //     .then((results: any) => {
  //       const labels = results[0].labelAnnotations;

  //       console.log("Labels:");
  //       labels.forEach((label: any) => console.log(label.description));
  //     })
  //     .catch((err: any) => {
  //       console.error("ERROR:", err)
  //     })
  // }

  ngOnInit(): void {
  }

}
