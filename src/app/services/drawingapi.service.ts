import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Drawing } from '../models/drawing';


@Injectable({
  providedIn: 'root'
})
export class DrawingapiService {

  private id = 3
  private drawingUrl = `http://webapi-prod.us-west-2.elasticbeanstalk.com/api/Drawing/player/${this.id}`

  constructor(private http : HttpClient) { 
  }
  getAllDrawingByPlayerID() : Observable<Drawing[]>{
    return this.http.get<Drawing[]>(this.drawingUrl);
  }
}
