import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemesvoitureComponent } from './listemesvoiture.component';

describe('ListemesvoitureComponent', () => {
  let component: ListemesvoitureComponent;
  let fixture: ComponentFixture<ListemesvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemesvoitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListemesvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
