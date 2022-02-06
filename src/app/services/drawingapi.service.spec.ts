import { TestBed } from '@angular/core/testing';

import { DrawingapiService } from './drawingapi.service';

describe('DrawingapiService', () => {
  let service: DrawingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
