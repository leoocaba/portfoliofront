import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoIdevComponent } from './logo-idev.component';

describe('LogoIdevComponent', () => {
  let component: LogoIdevComponent;
  let fixture: ComponentFixture<LogoIdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoIdevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoIdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
