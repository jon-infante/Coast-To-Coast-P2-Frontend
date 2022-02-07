import { Injectable } from '@angular/core';
import { Wallpost } from '../models/wallpost';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WallPostApiService {

  constructor(private http: HttpClient) {
  }
  GetAllWallPosts() : Promise<any>{
    return firstValueFrom(this.http.get<any>("http://webapi-prod.us-west-2.elasticbeanstalk.com/api/wallpost"))
  }
}
