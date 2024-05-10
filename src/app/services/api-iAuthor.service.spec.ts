import { TestBed } from '@angular/core/testing';

import { ApiIauthorService } from './api-iAuthor.service';

describe('ApiIauthorService', () => {
  let service: ApiIauthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIauthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
