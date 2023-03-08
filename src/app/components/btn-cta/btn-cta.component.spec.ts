import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCtaComponent } from './btn-cta.component';

describe('BtnCtaComponent', () => {
  let component: BtnCtaComponent;
  let fixture: ComponentFixture<BtnCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
