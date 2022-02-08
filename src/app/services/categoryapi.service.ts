import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Category } from '../models/category';



@Injectable({
  providedIn: 'root'
})
export class CategoryapiService {
  
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api/Category'
  
  getAllCategories() : Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}`))
  }
}