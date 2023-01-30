import { TestBed } from '@angular/core/testing';

import { AjoutevehiculeService } from './ajoutevehicule.service';

describe('AjoutevehiculeService', () => {
  let service: AjoutevehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutevehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
