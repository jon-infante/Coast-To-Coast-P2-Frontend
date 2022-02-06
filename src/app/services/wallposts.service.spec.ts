import { TestBed } from '@angular/core/testing';

import { WallpostsService } from './wallposts.service';

describe('WallpostsService', () => {
  let service: WallpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
