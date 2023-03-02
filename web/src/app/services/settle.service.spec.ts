import { TestBed } from '@angular/core/testing';

import { SettleService } from './settle.service';

describe('SettleService', () => {
  let service: SettleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
