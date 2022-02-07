import { TestBed } from '@angular/core/testing';

import { WallPostApiService } from './wall-post-api.service';

describe('WallPostApiService', () => {
  let service: WallPostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallPostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
