import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoeKindergardenComponent } from './moe-kindergarden.component';

describe('MoeKindergardenComponent', () => {
  let component: MoeKindergardenComponent;
  let fixture: ComponentFixture<MoeKindergardenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoeKindergardenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoeKindergardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
