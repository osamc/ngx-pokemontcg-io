import { TestBed } from '@angular/core/testing';

import { PokemontcgIoService } from './pokemontcg-io.service';

describe('PokemontcgIoService', () => {
  let service: PokemontcgIoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemontcgIoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
