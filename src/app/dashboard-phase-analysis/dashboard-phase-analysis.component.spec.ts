import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPhaseAnalysisComponent } from './dashboard-phase-analysis.component';

describe('DashboardPhaseAnalysisComponent', () => {
  let component: DashboardPhaseAnalysisComponent;
  let fixture: ComponentFixture<DashboardPhaseAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPhaseAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPhaseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
