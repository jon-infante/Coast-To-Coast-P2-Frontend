import { TestBed } from '@angular/core/testing';

import { GooglevisionService } from './googlevision.service';

describe('GooglevisionService', () => {
  let service: GooglevisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglevisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
