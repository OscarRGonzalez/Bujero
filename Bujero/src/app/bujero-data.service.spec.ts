import { TestBed } from '@angular/core/testing';

import { BujeroDataService } from './bujero-data.service';

describe('BujeroDataService', () => {
  let service: BujeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BujeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
