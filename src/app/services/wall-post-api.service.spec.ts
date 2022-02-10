import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'

import { WallPostApiService } from './wall-post-api.service';

describe('WallPostApiService', () => {
  let service: WallPostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(WallPostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    // it('should get all by wallposts', async () => {
  //   let fakeData: Wallpost[] = [
  //     {
  //       ID: 1,
  //       CategoryID: 1,
  //       Keyword: 'string',
  //       Drawings: []

  //     },
  //    {
  //       ID: 2,
  //       CategoryID: 2,
  //       Keyword: 'string2',
  //       Drawings: []

  //     },
  //   ];
    
  //   spyOn(service, 'GetAllWallPosts').and.returnValue(Promise.resolve(fakeData))

  //   await service.GetAllWallPosts().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.GetAllWallPosts).toHaveBeenCalled();
  //     expect(service.GetAllWallPosts).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
      // it('should get wallposts by keyword', async () => {
  //   let fakeData: Wallpost = 
  //     {
  //       ID: 1,
  //       CategoryID: 1,
  //       Keyword: 'string',
  //       Drawings: []

  //     }
  //   ;
    
  //   spyOn(service, 'GetWallPostByKeyword').and.returnValue(Promise.resolve(fakeData))

  //   await service.GetWallPostByKeyword().then((res) => {
  //     //Verify that the response is what we want
  //     expect(service.GetWallPostByKeyWord).toHaveBeenCalled();
  //     expect(service.GetWallPostByKeyword).toHaveBeenCalledTimes(1);
  //     expect(res).toBeTruthy();
  //     expect(res.length).toEqual(2);
  //   });
  // });
});
