import { TestBed } from '@angular/core/testing';

import { AppCommonServiceService } from './app-common-service.service';

describe('AppCommonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppCommonServiceService = TestBed.get(AppCommonServiceService);
    expect(service).toBeTruthy();
  });
});
