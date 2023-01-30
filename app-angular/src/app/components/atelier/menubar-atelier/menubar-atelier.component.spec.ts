import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarAtelierComponent } from './menubar-atelier.component';

describe('MenubarAtelierComponent', () => {
  let component: MenubarAtelierComponent;
  let fixture: ComponentFixture<MenubarAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenubarAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
