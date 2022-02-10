import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { CommentapiService } from './commentapi.service';

describe('CommentapiService', () => {
  let service: CommentapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CommentapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    // it('should get comments by drawing is', async () => {
  //   let fakeData: Comment []=[ 
  //     {
  // DrawingID: 1,
  // UserID: 1,
  // Username: 'string',
  // Message: 'string',
  // Likes: [],
  // Date: 'string',
  // IsLiked: true
  //     },
    //     {
  // DrawingID: 2,
  // UserID: 2,
  // Username: 'string2',
  // Message: 'string2',
  // Likes: [],
  // Date: 'string2',
  // IsLiked: true
  //     },
  //   ];
    
  //   spyOn(service, 'getCommentsByDrawingID').and.returnValue(Promise.resolve(fakeData))

  //   await service.getCommentsByDrawingID().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.getCommentsByDrawingID).toHaveBeenCalled();
  //     expect(service.getCommentsByDrawingID).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
    // it('should add comment', async () => {
  //   let fakeData: Comment = 
  //     {
  //
  // DrawingID: 1,
  // UserID: 1,
  // Username: 'string',
  // Message: 'string',
  // Likes: [],
  // Date: 'string',
  // IsLiked: true

  //     }
  //   ;
    
  //   spyOn(service, 'addComment').and.returnValue(Promise.resolve(fakeData))

  //   await service.addComment().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.addComment).toHaveBeenCalled();
  //     expect(service.addComment).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
  
});
