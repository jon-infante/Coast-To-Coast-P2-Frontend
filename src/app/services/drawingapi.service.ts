import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


import { Drawing } from '../models/drawing';


@Injectable({
  providedIn: 'root'
})
export class DrawingapiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api/Drawing'

  addDrawing(drawingToAdd: Drawing): Promise<Drawing>{
    return firstValueFrom(this.http.post<Drawing>(`${this.apiUrl}`, drawingToAdd))
  }
}
