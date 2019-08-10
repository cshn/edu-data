import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNearSchoolComponent } from './property-near-school.component';

describe('PropertyNearSchoolComponent', () => {
  let component: PropertyNearSchoolComponent;
  let fixture: ComponentFixture<PropertyNearSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyNearSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNearSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
