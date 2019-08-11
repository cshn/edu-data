import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTransactionComponent } from './property-transaction.component';

describe('PropertyTransactionComponent', () => {
  let component: PropertyTransactionComponent;
  let fixture: ComponentFixture<PropertyTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
