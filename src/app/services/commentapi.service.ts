import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Comment } from '../models/comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentapiService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.droogleAPIRootUrl;

  getCommentsByDrawingID(id: number): Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}/Comment/drawing/${id}`))
  }

  addComment(commentToAdd: Comment){
    return firstValueFrom(this.http.post<any>(`${this.apiUrl}/Comment`, commentToAdd))
  }
}
