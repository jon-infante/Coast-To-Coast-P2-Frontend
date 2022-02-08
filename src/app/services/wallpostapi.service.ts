import { Injectable } from '@angular/core';
import { Wallpost } from '../models/wallpost';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WallpostapiService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.droogleAPIRootUrl;

  getWallPostByID(id: number): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}/Wallpost/${id}`))
  }

}
