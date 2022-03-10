import { TestBed } from '@angular/core/testing';

import { ApiGouvRequestService } from './api-gouv-request.service';

describe('ApiGouvRequestService', () => {
  let service: ApiGouvRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGouvRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
