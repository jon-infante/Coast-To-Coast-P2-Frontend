import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class Amazons3Service {

  constructor() { }
  
  uploadFileToS3Bucket(file: any){
    const contentType = file.type;
    const bucket = new S3(
      {
          accessKeyId: 'AKIASBV3AUBGBMTI747N',
          secretAccessKey: 'assets/awssecretkey.txt"',
          region: 'us-west-2'  
      });
    const params = {
      Bucket: 'p2-droogle-images',
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    }
    bucket.upload(params, function (err: any, data: any) {
      if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}
