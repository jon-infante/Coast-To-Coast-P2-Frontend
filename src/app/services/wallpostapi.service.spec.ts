import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { WallpostapiService } from './wallpostapi.service';
import { Wallpost } from '../models/wallpost'

describe('WallpostapiService', () => {
  let service: WallpostapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(WallpostapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    it('should get wallpost by id', async () => {
    let fakeData: Wallpost[] = [
      {
        ID: 1,
        CategoryID: 1,
        Keyword: 'string',
        Drawings: []

      }
    ];
    
    spyOn(service, 'getWallPostByID').and.returnValue(Promise.resolve(fakeData))

    await service.getWallPostByID(1).then((res) => {
      //Verify that the response is what we want
      expect(service.getWallPostByID).toHaveBeenCalled();
      expect(service.getWallPostByID).toHaveBeenCalledTimes(1);
      expect(res).toBeTruthy();
      expect(res.length).toEqual(1);
    });
  });
});
