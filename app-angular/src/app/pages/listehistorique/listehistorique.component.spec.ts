import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListehistoriqueComponent } from './listehistorique.component';

describe('ListehistoriqueComponent', () => {
  let component: ListehistoriqueComponent;
  let fixture: ComponentFixture<ListehistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListehistoriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListehistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
