import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Category } from '../models/category';



@Injectable({
  providedIn: 'root'
})
export class CategoryapiService {
  private apiUrl = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api/category'
  


  constructor(private http: HttpClient) { }
  getAllCategories() : Promise<Category[]>{
    return firstValueFrom(this.http.get<Category[]>(`${this.apiUrl}`))
  }
}

