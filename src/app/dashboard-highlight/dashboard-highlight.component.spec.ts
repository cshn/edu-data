import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHighlightComponent } from './dashboard-highlight.component';

describe('DashboardHighlightComponent', () => {
  let component: DashboardHighlightComponent;
  let fixture: ComponentFixture<DashboardHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
