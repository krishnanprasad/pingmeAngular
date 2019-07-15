import { TestBed } from '@angular/core/testing';

import { ServiceDescriptionService } from './service-description.service';

describe('ServiceDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDescriptionService = TestBed.get(ServiceDescriptionService);
    expect(service).toBeTruthy();
  });
});
