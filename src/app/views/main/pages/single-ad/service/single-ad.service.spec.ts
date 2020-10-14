import { TestBed } from '@angular/core/testing';

import { SingleAdService } from './single-ad.service';

describe('SingleAdService', () => {
  let service: SingleAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
