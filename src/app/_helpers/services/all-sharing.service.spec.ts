import { TestBed } from '@angular/core/testing';

import { AllSharingService } from './all-sharing.service';

describe('AllSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllSharingService = TestBed.get(AllSharingService);
    expect(service).toBeTruthy();
  });
});
