import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduBlogComponent } from './edu-blog.component';

describe('EduBlogComponent', () => {
  let component: EduBlogComponent;
  let fixture: ComponentFixture<EduBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
