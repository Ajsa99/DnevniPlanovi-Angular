import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAktivnostComponent } from './add-aktivnost.component';

describe('AddAktivnostComponent', () => {
  let component: AddAktivnostComponent;
  let fixture: ComponentFixture<AddAktivnostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAktivnostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAktivnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
