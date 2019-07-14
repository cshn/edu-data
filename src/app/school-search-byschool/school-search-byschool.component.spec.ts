import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSearchByschoolComponent } from './school-search-byschool.component';

describe('SchoolSearchByschoolComponent', () => {
  let component: SchoolSearchByschoolComponent;
  let fixture: ComponentFixture<SchoolSearchByschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSearchByschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSearchByschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
