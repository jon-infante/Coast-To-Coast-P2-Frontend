import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthBtnComponent } from 'src/app/auth-btn/auth-btn.component';
import { Player } from 'src/app/models/player';
import { PlayerapiService } from 'src/app/services/playerapi.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  player: Player = {

    ID: 0,
    Username: '',
    Password: '',
    CorrectGuesses: 0,
    TotalGuesses: 0,
    AverageResult: 0,
    AverageScore: 0,
    Drawings: []
    
  };

  constructor(public auth:  AuthService, private playerApi: PlayerapiService) { }


  ngOnInit(): void {
  }

}
