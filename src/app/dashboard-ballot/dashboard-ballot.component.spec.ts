import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBallotComponent } from './dashboard-ballot.component';

describe('DashboardBallotComponent', () => {
  let component: DashboardBallotComponent;
  let fixture: ComponentFixture<DashboardBallotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBallotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
