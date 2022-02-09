import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerapiService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api/';

  getLoginPlayer(username : string): Promise<Player> {
    console.log("got user nickname: ", username);
    return firstValueFrom(this.http.get<Player>(this.rootURL+"Player/login/"+username))
  }




  // getLoginPlayer(username : string): Promise<Player> {
  //   console.log("got user nickname: ", username);
  //   return firstValueFrom(this.http.get(this.rootURL+"/Player/"+username))
  // }
  
  // getLoginPlayer(playerMade: Player)
  // {
  //   return firstValueFrom(this.http.post(this.rootURL + "/Player/", playerMade))
  // }
  // getPlayerByUsername(string: Player['Username']) {
  //   return firstValueFrom(this.http.get(this.rootURL+"/ID", Player.Username))
  // }
}
