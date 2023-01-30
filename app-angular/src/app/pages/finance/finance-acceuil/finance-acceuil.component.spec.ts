import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceAcceuilComponent } from './finance-acceuil.component';

describe('FinanceAcceuilComponent', () => {
  let component: FinanceAcceuilComponent;
  let fixture: ComponentFixture<FinanceAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceAcceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
