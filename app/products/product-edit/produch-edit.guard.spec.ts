import { TestBed, async, inject } from '@angular/core/testing';

import { ProduchEditGuard } from './produch-edit.guard';

describe('ProduchEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduchEditGuard]
    });
  });

  it('should ...', inject([ProduchEditGuard], (guard: ProduchEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
