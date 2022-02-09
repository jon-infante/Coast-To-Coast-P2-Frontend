import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Drawing } from '../models/drawing';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DrawingapiService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.droogleAPIRootUrl;

  addDrawing(drawingToAdd: Drawing): Promise<Drawing>{
    return firstValueFrom(this.http.post<Drawing>(`${this.apiUrl}/Drawing`, drawingToAdd))
  }

  getAllDrawings(): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}/Drawing`))
  }

  getAllDrawingsByPlayerID(id: number): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}/Drawing/player/${id}`))
  }

  getAllDrawingsByWallPostID(id: number): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}/Drawing/wallpost/${id}`))
  }

  updateDrawing(drawingToUpdate: Drawing){
    return firstValueFrom(this.http.put<Drawing>(`${this.apiUrl}/Drawing`, drawingToUpdate))
  }
}