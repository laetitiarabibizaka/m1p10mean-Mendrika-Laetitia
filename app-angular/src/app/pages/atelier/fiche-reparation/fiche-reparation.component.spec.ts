import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheReparationComponent } from './fiche-reparation.component';

describe('FicheReparationComponent', () => {
  let component: FicheReparationComponent;
  let fixture: ComponentFixture<FicheReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
