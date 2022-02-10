import { Component, OnInit } from '@angular/core';
import { Amazons3Service } from 'src/app/services/amazons3.service';
import { DrawingapiService } from 'src/app/services/drawingapi.service';
import { GooglevisionService } from '../../services/googlevision.service';
import { Drawing } from '../../models/drawing';
import { Wallpost } from '../../models/wallpost'
import { Player } from '../../models/player'
import { ActivatedRoute } from '@angular/router';
import { WallpostapiService } from 'src/app/services/wallpostapi.service';
import { PlayerapiService } from 'src/app/services/playerapi.service';
import { Router } from "@angular/router";
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-canvas-page',
  templateUrl: './canvas-page.component.html',
  styleUrls: ['./canvas-page.component.css']
})
export class CanvasPageComponent implements OnInit {
  //api key params

  constructor(public googlevision: GooglevisionService, public amazons3: Amazons3Service, 
    public drawingapi: DrawingapiService, public wallpostapi: WallpostapiService, 
    public route: ActivatedRoute, public playerapi: PlayerapiService, public router: Router, 
    public auth: AuthService ) { }


    keywordSelected = "any Image!"
    pageLoaded = false;
    isLoaded = false;
    googleResponse = [{"description": "null",
                    "mid": "null",
                    "score": 0,
                    "topicality": 0}]

    // Empty initializer for wallpost and player
    currPlayer: Player = {'ID': 3,
                      'Username': "null",
                      'Password': "null",
                      'CorrectGuesses': 0,
                      'TotalGuesses': 0,
                      'AverageResult': 0,
                      'AverageScore': 0,
                      'Drawings': []
                      }
    wallPostID = 31;
    wallPost: Wallpost = {'ID': 0,
                          'CategoryID': 0,
                          'Drawings': [],
                          'Keyword': "null"                                
                          }

  ngOnInit(){

    this.route.params.subscribe(params => {
    //Checking current logged in user and updating blank player
    this.auth.user$.subscribe((userInfo)=> {
      if(userInfo?.nickname != null){
      this.getCurrentPlayer(userInfo?.nickname)
      }
      })
    
    // extract the id from route params
    this.wallPostID = +params['id']; // (+) converts string 'id' to a number
    if(!isNaN(this.wallPostID)){
    this.wallpostapi.getWallPostByID(this.wallPostID).then((wallpost) => {
        this.wallPost.ID = wallpost.id,
        this.wallPost.CategoryID = wallpost.categoryID,
        this.wallPost.Drawings = wallpost.drawings,
        this.wallPost.Keyword = wallpost.keyword
        this.keywordSelected = "a " + this.wallPost.Keyword + "!"
        this.pageLoaded = true;
      })
    }
    else{
      //Default wall post to post to
      this.wallPostID = 31
      this.pageLoaded = true;
    }
    });
  }
  //Gets current play information by nickname logged in
  getCurrentPlayer(username: string | undefined){
    this.playerapi.getPlayerByUsername(username!).then((player) => {
      this.currPlayer.ID = player.id,
      this.currPlayer.Username = player.username
      this.currPlayer.AverageScore = player.averageScore,
      this.currPlayer.TotalGuesses = player.totalGuesses,
      this.currPlayer.CorrectGuesses = player.correctGuesses
    })
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
  async submitDrawing(image: any){
    return new Promise(resolve =>{
      this.googlevision.submitDrawingToGoogle(image).then((response: any) =>
      {
        var res = JSON.stringify(response);
        var resJson = JSON.parse(res);
        var labels = resJson.responses[0].labelAnnotations
        labels.forEach((label: any) => {
          label.score = (label.score * 100).toFixed(2)
        })
        this.googleResponse = labels
        this.isLoaded = true;
        resolve(this.googleResponse)
      })
    })
  }

  // Checks if the google responses matched the keyword
  getGoogleScores(googleResponse: any){
    console.log(googleResponse)
      let googleGuess = false;
      let googleScore = 0;
      let googleSingleResponse = "null"
      googleResponse.forEach((response: any) => {
          let keywordResponse: string = response.description.toLowerCase();
          let keywordWallPost: string = this.wallPost.Keyword.toLowerCase();
          //If there is a matching description found in the google response
          if(keywordResponse == keywordWallPost){
            googleGuess = true;
            googleSingleResponse = this.wallPost.Keyword;
            let score = response.score
            googleScore = +score
          }
      })
      if (!googleGuess){
        let singleResponse = this.googleResponse[0].description
        //Sets first letter to uppercase
        googleSingleResponse = singleResponse.charAt(0).toUpperCase() + singleResponse.slice(1)
        console.log(googleSingleResponse)
      }
      return [googleGuess, googleScore, googleSingleResponse]
  }

  addDrawingToDatabase(imageBucketLink: any, googleResults: any){
    //Current date and time
    var date = new Date().toString();
    //Seeing if it's a free drawing canvas or we are drawing a specific keyword from a wall post
    let keyword = ""
    if(this.wallPost.Keyword == "null"){
      keyword = "Free Draw";
    }
    else{
      keyword = this.wallPost.Keyword;
    }
    //hard coded data for now
    var drawing: Drawing = {
      ID: 0,
      PlayerID: this.currPlayer.ID,
      PlayerName: this.currPlayer.Username,
      WallPostID: this.wallPostID,
      Keyword: keyword,
      BucketImage: imageBucketLink,
      Guess: googleResults[0],
      GoogleScore: googleResults[1],
      GoogleResponse: googleResults[2],
      IsLiked: false,
      Likes: [],
      Date: date
    }
    this.drawingapi.addDrawing(drawing).then((res) => {
      console.log(res)
    })
    //Updates player scores with new google results
    this.updatePlayerResults(this.currPlayer, googleResults)
  }

  updatePlayerResults(player: Player, googleResults: any){
    //Updates total guesses and correct number of guesses
    if (googleResults[0]){
      player.CorrectGuesses += 1;
    }
    //Calculating new average score    
    let currentScore = player.AverageScore + googleResults[1]
    if (currentScore != 0){
      let currentAverageScore = (player.AverageScore*player.TotalGuesses) + googleResults[1]
      player.TotalGuesses += 1;
      player.AverageScore = parseFloat((currentAverageScore / player.TotalGuesses).toFixed(2))
    }
    //Average score is 0 currently
    else{
      player.TotalGuesses += 1;
    }
    console.log(player)
    this.playerapi.updatePlayer(player)
  }

  uploadImageToS3AndDatabase(){
    let results: any[] = [];
    var image = this.saveImage();
    //Submits drawing to google vision api for response
    this.submitDrawing(image).then((googleResults: any) =>{
        results = this.getGoogleScores(googleResults)
        console.log(results)
    })
    //Convert the image to a data blob png
    var imageBlob = this.dataURItoBlob(image);
    //Returns the S3 bucket link we uploaded the image to
    this.amazons3.uploadFileToS3Bucket(imageBlob).then((response: any) => {
      var imageLocation = JSON.stringify(response.Location).slice(1,-1)
      //Adds drawing to elephant sql database
      this.addDrawingToDatabase(imageLocation, results)
    })
  }
}
