import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPerfilInicioComponent } from './img-perfil-inicio.component';

describe('ImgPerfilInicioComponent', () => {
  let component: ImgPerfilInicioComponent;
  let fixture: ComponentFixture<ImgPerfilInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgPerfilInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgPerfilInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
