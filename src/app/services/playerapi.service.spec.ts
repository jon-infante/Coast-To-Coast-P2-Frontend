import { TestBed } from '@angular/core/testing';
import { Player } from '../models/player';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { PlayerapiService } from './playerapi.service';

describe('PlayerapiService', () => {
  let service: PlayerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlayerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get player by username', async () => {
    let fakeData: Player = 
      {
        ID: 1,
        Username: 'string1',
        Password: 'string',
        CorrectGuesses: 1,
        TotalGuesses: 1,
        AverageResult: 1,
        AverageScore: 1,
        Drawings: []
      }
    
    spyOn(service, 'getLoginPlayer').and.returnValue(Promise.resolve(fakeData))

    await service.getLoginPlayer('string1').then((player) => {
      //Verify that the response is what we want
      expect(service.getLoginPlayer).toHaveBeenCalled();
      expect(service.getLoginPlayer).toHaveBeenCalledTimes(1);
      expect(player).toBeTruthy();
      expect((player as Player).Username).toEqual('string1');
    });
  });
  
});
