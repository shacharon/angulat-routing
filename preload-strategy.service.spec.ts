import { TestBed } from '@angular/core/testing';

import { PreloadStrategyService } from './preload-strategy.service';

describe('PreloadStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloadStrategyService = TestBed.get(PreloadStrategyService);
    expect(service).toBeTruthy();
  });
});
