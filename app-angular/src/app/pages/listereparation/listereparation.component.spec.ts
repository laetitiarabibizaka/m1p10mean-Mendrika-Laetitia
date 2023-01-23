import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListereparationComponent } from './listereparation.component';

describe('ListereparationComponent', () => {
  let component: ListereparationComponent;
  let fixture: ComponentFixture<ListereparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListereparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListereparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
