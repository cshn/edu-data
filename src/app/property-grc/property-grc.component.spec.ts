import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGrcComponent } from './property-grc.component';

describe('PropertyGrcComponent', () => {
  let component: PropertyGrcComponent;
  let fixture: ComponentFixture<PropertyGrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyGrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyGrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
