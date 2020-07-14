import { TestBed } from '@angular/core/testing';

import { ListaFundosService } from './lista-fundos.service';

describe('ListaFundosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaFundosService = TestBed.get(ListaFundosService);
    expect(service).toBeTruthy();
  });
});
