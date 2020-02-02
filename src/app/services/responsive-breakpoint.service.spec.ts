import { TestBed } from '@angular/core/testing';

import { ResponsiveBreakpointService } from './responsive-breakpoint.service';

describe('ResponsiveBreakpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsiveBreakpointService = TestBed.get(ResponsiveBreakpointService);
    expect(service).toBeTruthy();
  });
});
