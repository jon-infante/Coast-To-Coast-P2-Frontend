import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Player } from '../models/player';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayerapiService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api/';

  createNewPlayer(playerMade: Player)
  {
    return firstValueFrom(this.http.post(this.rootURL + "/Player", playerMade))
  }
}
