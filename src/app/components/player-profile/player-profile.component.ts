import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerapiService } from 'src/app/services/playerapi.service';
import { Player } from '../../models/player';



@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  constructor(private apiService: PlayerapiService, private router:Router) { }

  ngOnInit(): void {
  }

}
