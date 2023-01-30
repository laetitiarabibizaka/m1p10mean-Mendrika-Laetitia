import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFicheComponent } from './finance-fiche.component';

describe('FinanceFicheComponent', () => {
  let component: FinanceFicheComponent;
  let fixture: ComponentFixture<FinanceFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceFicheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
