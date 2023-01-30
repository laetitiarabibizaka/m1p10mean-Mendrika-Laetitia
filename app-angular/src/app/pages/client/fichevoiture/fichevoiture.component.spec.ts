import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichevoitureComponent } from './fichevoiture.component';

describe('FichevoitureComponent', () => {
  let component: FichevoitureComponent;
  let fixture: ComponentFixture<FichevoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichevoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichevoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
