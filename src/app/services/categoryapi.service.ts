import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Category } from '../models/category';



@Injectable({
  providedIn: 'root'
})
export class CategoryapiService {
<<<<<<< HEAD
  private apiUrl = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api/category'
  


=======
  
>>>>>>> 4d853f78b5c0a09c1fd1f98a2bf145471ee74ecc
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://webapi-prod.us-west-2.elasticbeanstalk.com/api/Category'
  
  getAllCategories() : Promise<any>{
    return firstValueFrom(this.http.get<any>(`${this.apiUrl}`))
  }
}