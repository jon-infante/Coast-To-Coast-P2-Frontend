import { Injectable } from '@angular/core';
import { Wallpost } from '../models/wallpost';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WallPostApiService {

  constructor(private http: HttpClient) {
  }
  private apiUrl = environment.droogleAPIRootUrl;

  GetAllWallPosts() : Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}/wallpost`))
  }

  GetWallPostByKeyword(keyword: any): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}/wallpost/search/${keyword}`))
  }
}
