import { TestBed } from '@angular/core/testing';

import { CheatsheetsService } from './cheatsheets.service';

describe('CheatsheetsService', () => {
  let service: CheatsheetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheatsheetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
