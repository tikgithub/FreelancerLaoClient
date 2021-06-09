import { TestBed } from '@angular/core/testing';

import { GenderAPIService } from './gender-api.service';

describe('GenderAPIService', () => {
  let service: GenderAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenderAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
