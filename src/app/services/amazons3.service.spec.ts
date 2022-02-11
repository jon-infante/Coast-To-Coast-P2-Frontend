import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { Amazons3Service } from './amazons3.service';

describe('Amazons3Service', () => {
  let service: Amazons3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(Amazons3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    // it('should upload image and return bucket link', async () => {
  //   let fakeData: Player = 
  //     {

  //     }
  //   ;
    
  //   spyOn(service, 'uploadFileToS3Bucket').and.returnValue(Promise.resolve(fakeData))

  //   await service.uploadFileToS3Bucket().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.uploadFileToS3Bucket).toHaveBeenCalled();
  //     expect(service.uploadFileToS3Bucket).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
  
});
