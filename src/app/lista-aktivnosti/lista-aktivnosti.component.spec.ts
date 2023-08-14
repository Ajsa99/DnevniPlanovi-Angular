import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAktivnostiComponent } from './lista-aktivnosti.component';

describe('ListaAktivnostiComponent', () => {
  let component: ListaAktivnostiComponent;
  let fixture: ComponentFixture<ListaAktivnostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAktivnostiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAktivnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
