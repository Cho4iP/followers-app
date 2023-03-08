import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseForm2Component } from './course-form2.component';

describe('CourseForm2Component', () => {
  let component: CourseForm2Component;
  let fixture: ComponentFixture<CourseForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseForm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
