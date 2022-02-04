import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglevisionService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://vision.googleapis.com/v1/images:annotate'
  payload = {
    "requests":[
      {
        "image":{
          "content": ""
        },
        "features":[
          {
            "type":"LABEL_DETECTION",
            "maxResults":5
          }
        ]
      }
    ]
  }
  apikey = ""
  key = this.http.get("assets/apikey.txt" , { responseType: 'text' }).subscribe(data => {
    console.log(data);
    this.apikey = data;
  })  

  submitDrawingToGoogle(image: any){
    image = image.slice(22);
    this.payload.requests[0].image.content = image;
    return firstValueFrom(this.http.post<any>(`${this.apiUrl}?key=${this.apikey}`, this.payload));
  }
}
