import { TestBed } from '@angular/core/testing';

import { RecuServiceService } from './recu-service.service';

describe('RecuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuServiceService = TestBed.get(RecuServiceService);
    expect(service).toBeTruthy();
  });
});
