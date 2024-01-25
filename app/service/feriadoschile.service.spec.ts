import { TestBed } from '@angular/core/testing';

import { FeriadoschileService } from './feriadoschile.service';

describe('FeriadoschileService', () => {
  let service: FeriadoschileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeriadoschileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
