import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { GooglevisionService } from './googlevision.service';

describe('GooglevisionService', () => {
  let service: GooglevisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GooglevisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    // it('submit drawing to google and return...', async () => {
  //   let fakeData: Drawing = 
  //     {
    // ID: 1,
    // PlayerID: 1,
    // PlayerName: 'string',
    // WallPostID: 1,
    // Keyword: 'string',
    // BucketImage: 'string',
    // Guess: true,
    // GoogleScore: 1,
    // GoogleResponse: 'string',
    // Likes: [],
    // Date: 'string',
    // IsLiked: true

  //     }
  //   ;
    
  //   spyOn(service, 'submitDrawingToGoogle').and.returnValue(Promise.resolve(fakeData))

  //   await service.submitDrawingToGoogle().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.submitDrawingToGoogle).toHaveBeenCalled();
  //     expect(service.submitDrawingToGoogle).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
  
});
