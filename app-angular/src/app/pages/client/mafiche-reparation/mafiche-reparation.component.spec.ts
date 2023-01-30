import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaficheReparationComponent } from './mafiche-reparation.component';

describe('MaficheReparationComponent', () => {
  let component: MaficheReparationComponent;
  let fixture: ComponentFixture<MaficheReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaficheReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaficheReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
