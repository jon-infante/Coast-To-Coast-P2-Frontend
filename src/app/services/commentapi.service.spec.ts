import { TestBed } from '@angular/core/testing';

import { CommentapiService } from './commentapi.service';

describe('CommentapiService', () => {
  let service: CommentapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
