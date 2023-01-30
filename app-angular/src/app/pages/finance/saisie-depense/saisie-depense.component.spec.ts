import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieDepenseComponent } from './saisie-depense.component';

describe('SaisieDepenseComponent', () => {
  let component: SaisieDepenseComponent;
  let fixture: ComponentFixture<SaisieDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieDepenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisieDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
