import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiAktivnostiComponent } from './detalji-aktivnosti.component';

describe('DetaljiAktivnostiComponent', () => {
  let component: DetaljiAktivnostiComponent;
  let fixture: ComponentFixture<DetaljiAktivnostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiAktivnostiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaljiAktivnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
