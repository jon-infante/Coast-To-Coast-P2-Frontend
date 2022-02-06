import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class Amazons3Service {

  constructor(private http: HttpClient) { }
  //Getting secret key
  secretAccessKey = ""
  key = this.http.get("assets/awssecretkey.txt" , { responseType: 'text' }).subscribe(data => {
    this.secretAccessKey = data;
  })  
  
  async uploadFileToS3Bucket(file: any){
    const contentType = file.type;

    const bucket = new S3(
      {
          accessKeyId: 'AKIASBV3AUBGBMTI747N',
          secretAccessKey: `${this.secretAccessKey}`,
          region: 'us-west-2'  
      });
    const params = {
      Bucket: 'p2-droogle-images',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    }
    //Uploads image to Amazon S3 bucket
    var bucketLink = await bucket.upload(params).promise()
    return bucketLink;
  }
}
