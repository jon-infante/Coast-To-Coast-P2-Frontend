import { TestBed } from '@angular/core/testing';

import { CategoryapiService } from './categoryapi.service';

describe('CategoryapiService', () => {
  let service: CategoryapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
