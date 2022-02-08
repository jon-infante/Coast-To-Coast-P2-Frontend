import { TestBed } from '@angular/core/testing';

import { WallpostapiService } from './wallpostapi.service';

describe('WallpostapiService', () => {
  let service: WallpostapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallpostapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
