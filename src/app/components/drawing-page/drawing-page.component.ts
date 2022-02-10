import { Component, OnInit } from '@angular/core';
import { Drawing } from '../../models/drawing'
import { Comment } from '../../models/comment'
import { Player } from '../../models/player'
import { DrawingapiService } from 'src/app/services/drawingapi.service';
import { ActivatedRoute } from '@angular/router';
import { CommentapiService } from 'src/app/services/commentapi.service';
import { AuthService } from '@auth0/auth0-angular';
import { PlayerapiService } from 'src/app/services/playerapi.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-drawing-page',
  templateUrl: './drawing-page.component.html',
  styleUrls: ['./drawing-page.component.css']
})
export class DrawingPageComponent implements OnInit {

  constructor(private drawingapiService: DrawingapiService, private route: ActivatedRoute,
    private commentapiService: CommentapiService, public auth: AuthService, private playerapi: PlayerapiService,
    private formBuilder: FormBuilder,) { }
  isLoaded = false;
  currDrawing: Drawing = {'ID': 0,
                          'PlayerID': 0,
                          'PlayerName': "null",
                          'WallPostID': 0,
                          'Keyword': "null",
                          'BucketImage': "null",
                          'Guess': false,
                          'GoogleScore': 0,
                          'GoogleResponse': "null",
                          'Likes': [],
                          'Date': "null",
                          'IsLiked': false
      }
  currPlayer: Player = {'ID': 3,
      'Username': "null",
      'Password': "null",
      'CorrectGuesses': 0,
      'TotalGuesses': 0,
      'AverageResult': 0,
      'AverageScore': 0,
      'Drawings': []
      }

  allComments: Comment[] = []

  commentForm = this.formBuilder.group({
    message: ''
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.auth.user$.subscribe((userInfo)=> {
        if(userInfo?.nickname != null){
        this.getCurrentPlayer(userInfo?.nickname)
        }
        })
      // extract the id from route params (keyworD)
      let id = +params['id'];
      //If params are undefined, we get all the drawings fromt the list
      this.drawingapiService.getDrawingByID(id).then((drawing) => 
      {
            this.currDrawing.ID = drawing.id,
            this.currDrawing.PlayerID = drawing.playerID,
            this.currDrawing.PlayerName = drawing.playerName,
            this.currDrawing.WallPostID = drawing.wallPostID,
            this.currDrawing.Keyword = drawing.keyword,
            this.currDrawing.BucketImage = drawing.bucketImage,
            this.currDrawing.Guess = drawing.guess,
            this.currDrawing.GoogleScore = drawing.googleScore,
            this.currDrawing.GoogleResponse = drawing.googleResponse,
            this.currDrawing.Likes = drawing.likes,
            this.currDrawing.Date = drawing.date,
            this.currDrawing.IsLiked = drawing.isLiked
            this.isLoaded = true;
          }
        )
      this.commentapiService.getCommentsByDrawingID(id).then((commentArray)=> {
        commentArray.forEach((comment: any) => {
          var castedComment: Comment = {
            ID: comment.id,
            DrawingID: comment.drawingID,
            UserID: comment.userID,
            Username: comment.username,
            Message: comment.message,
            Date: comment.date,
            Likes: [],
            IsLiked: comment.isLiked
          }
          this.allComments.push(castedComment)
        })
        console.log(this.allComments)
      })
      })
  }
  LikeDrawing(drawing: Drawing){
    drawing.IsLiked = !drawing.IsLiked
    console.log(this.drawingapiService.updateDrawing(drawing))
  }

  getCurrentPlayer(username: string | undefined){
    this.playerapi.getPlayerByUsername(username!).then((player) => {
      this.currPlayer.ID = player.id,
      this.currPlayer.Username = player.username
    })
  }
  
  AddCommentToDrawing(){
    var message = this.commentForm.value.message
    var date = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    let commentToAdd: Comment = {
      ID: 0,
      DrawingID: this.currDrawing.ID,
      UserID: this.currPlayer.ID,
      Username: this.currPlayer.Username,
      Message: message,
      Likes: [],
      Date: date,
      IsLiked: false
    }
    console.log(commentToAdd)
    this.commentapiService.addComment(commentToAdd);
    this.allComments.push(commentToAdd)
  }
}
