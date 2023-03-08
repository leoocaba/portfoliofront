import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoInicioComponent } from './saludo-inicio.component';

describe('SaludoInicioComponent', () => {
  let component: SaludoInicioComponent;
  let fixture: ComponentFixture<SaludoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
