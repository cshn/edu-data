import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGepComponent } from './dashboard-gep.component';

describe('DashboardGepComponent', () => {
  let component: DashboardGepComponent;
  let fixture: ComponentFixture<DashboardGepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
