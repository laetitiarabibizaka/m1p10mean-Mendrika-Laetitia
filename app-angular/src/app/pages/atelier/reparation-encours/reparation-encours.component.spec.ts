import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationEncoursComponent } from './reparation-encours.component';

describe('ReparationEncoursComponent', () => {
  let component: ReparationEncoursComponent;
  let fixture: ComponentFixture<ReparationEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationEncoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReparationEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
