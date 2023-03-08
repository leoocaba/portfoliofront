import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocaloSuperiorComponent } from './socalo-superior.component';

describe('SocaloSuperiorComponent', () => {
  let component: SocaloSuperiorComponent;
  let fixture: ComponentFixture<SocaloSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocaloSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocaloSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
