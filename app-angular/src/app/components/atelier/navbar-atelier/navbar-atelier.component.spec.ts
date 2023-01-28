import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAtelierComponent } from './navbar-atelier.component';

describe('NavbarAtelierComponent', () => {
  let component: NavbarAtelierComponent;
  let fixture: ComponentFixture<NavbarAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
