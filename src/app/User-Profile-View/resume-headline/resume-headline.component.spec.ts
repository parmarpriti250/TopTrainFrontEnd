import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeHeadlineComponent } from './resume-headline.component';

describe('ResumeHeadlineComponent', () => {
  let component: ResumeHeadlineComponent;
  let fixture: ComponentFixture<ResumeHeadlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeHeadlineComponent]
    });
    fixture = TestBed.createComponent(ResumeHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
