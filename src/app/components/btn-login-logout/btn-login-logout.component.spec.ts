import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoginLogoutComponent } from './btn-login-logout.component';

describe('BtnLoginLogoutComponent', () => {
  let component: BtnLoginLogoutComponent;
  let fixture: ComponentFixture<BtnLoginLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnLoginLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnLoginLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
