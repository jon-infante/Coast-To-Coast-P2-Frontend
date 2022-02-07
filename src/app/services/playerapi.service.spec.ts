import { TestBed } from '@angular/core/testing';

import { PlayerapiService } from './playerapi.service';

describe('PlayerapiService', () => {
  let service: PlayerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
