import { TestBed } from '@angular/core/testing';

import { ApiInewsService } from './api-inews.service';

describe('ApiInewsService', () => {
  let service: ApiInewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
