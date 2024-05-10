import { TestBed } from '@angular/core/testing';

import { ApiIUserServiceService } from './api-iuser-service.service';

describe('ApiIUserServiceService', () => {
  let service: ApiIUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
