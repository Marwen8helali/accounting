import { TestBed } from '@angular/core/testing';

import { DataCurrencyService } from './data-currency.service';

describe('DataCurrencyService', () => {
  let service: DataCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
