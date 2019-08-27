import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRankComponent } from './school-rank.component';

describe('SchoolRankComponent', () => {
  let component: SchoolRankComponent;
  let fixture: ComponentFixture<SchoolRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
