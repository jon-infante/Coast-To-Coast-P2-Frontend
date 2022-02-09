import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerapiService } from 'src/app/services/playerapi.service';
import { Player } from '../../models/player';
import { CanvasPageComponent } from '../canvas-page/canvas-page.component';
import { Amazons3Service } from 'src/app/services/amazons3.service';
import { DrawingapiService } from 'src/app/services/drawingapi.service';
import { GooglevisionService } from '../../services/googlevision.service';
import { Drawing } from '../../models/drawing';
import { Wallpost } from '../../models/wallpost'
import { ActivatedRoute } from '@angular/router';
import { WallpostapiService } from 'src/app/services/wallpostapi.service';



@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent extends CanvasPageComponent implements OnInit {

  constructor(private apiService: PlayerapiService, public override googlevision: GooglevisionService, public override amazons3: Amazons3Service, 
    public override drawingapi: DrawingapiService, public override wallpostapi: WallpostapiService, 
    public override route: ActivatedRoute, public override playerapi: PlayerapiService, public override router: Router ) {
    super(googlevision, amazons3, drawingapi, wallpostapi, route, playerapi, router);
  }

  override playerID = 3;
  override currPlayer: Player = {'ID': 0,
                    'Username': "null",
                    'Password': "null",
                    'CorrectGuesses': 0,
                    'TotalGuesses': 0,
                    'AverageResult': 0,
                    'AverageScore': 0,
                    'Drawings': []
                    }

  override getCurrentPlayer(id: number){
    this.playerapi.getPlayerByID(id).then((player) => {
      this.currPlayer.ID = player.id,
      this.currPlayer.Username = player.username
      player.drawings.forEach((drawing: any) => {
        var castedDrawing: Drawing = {
          ID: drawing.id,
          PlayerID: drawing.playerID,
          PlayerName: drawing.playerName,
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
        this.currPlayer.Drawings.push(castedDrawing)
      })
    })


  }

  
}

