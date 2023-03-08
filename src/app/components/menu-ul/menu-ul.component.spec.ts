import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUlComponent } from './menu-ul.component';

describe('MenuUlComponent', () => {
  let component: MenuUlComponent;
  let fixture: ComponentFixture<MenuUlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuUlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuUlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
