import { TestBed, inject } from '@angular/core/testing';

import { EnricherService } from './enricher.service';

describe('EnricherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnricherService]
    });
  });

  it('should be created', inject([EnricherService], (service: EnricherService) => {
    expect(service).toBeTruthy();
  }));
});
