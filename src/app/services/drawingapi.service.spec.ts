import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { DrawingapiService } from './drawingapi.service';

describe('DrawingapiService', () => {
  let service: DrawingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DrawingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

        // it('should get all drawing', async () => {
  //   let fakeData: Drawing []=[ 
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

  //     },
    //     {
    // ID: 2,
    // PlayerID: 2,
    // PlayerName: 'string2',
    // WallPostID: 2,
    // Keyword: 'string2',
    // BucketImage: 'string2',
    // Guess: true,
    // GoogleScore: 2,
    // GoogleResponse: 'string2',
    // Likes: [],
    // Date: 'string2',
    // IsLiked: true

  //     },
  //   ];
    
  //   spyOn(service, 'getAllDrawings').and.returnValue(Promise.resolve(fakeData))

  //   await service.getAllDrawings().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.getAllDrawings).toHaveBeenCalled();
  //     expect(service.getAllDrawings).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
  
      // it('add drawing to database', async () => {
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
    
  //   spyOn(service, 'addDrawing').and.returnValue(Promise.resolve(fakeData))

  //   await service.addDrawing().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.addDrawing).toHaveBeenCalled();
  //     expect(service.addDrawing).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
});
