import { TestBed } from '@angular/core/testing';

import { DetalleproductoService } from './detalleproducto.service';

describe('DetalleproductoService', () => {
  let service: DetalleproductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleproductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
