/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KorisnikService } from './korisnik.service';

describe('Service: Korisnik', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KorisnikService]
    });
  });

  it('should ...', inject([KorisnikService], (service: KorisnikService) => {
    expect(service).toBeTruthy();
  }));
});
