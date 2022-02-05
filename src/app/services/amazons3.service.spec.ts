import { TestBed } from '@angular/core/testing';

import { Amazons3Service } from './amazons3.service';

describe('Amazons3Service', () => {
  let service: Amazons3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Amazons3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
