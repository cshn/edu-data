import { TestBed } from '@angular/core/testing';

import { SchoolListService } from './school-list.service';

describe('SchoolListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolListService = TestBed.get(SchoolListService);
    expect(service).toBeTruthy();
  });
});
