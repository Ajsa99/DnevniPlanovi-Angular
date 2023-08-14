/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AktivnostService } from './aktivnost.service';

describe('Service: Aktivnost', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AktivnostService]
    });
  });

  it('should ...', inject([AktivnostService], (service: AktivnostService) => {
    expect(service).toBeTruthy();
  }));
});
