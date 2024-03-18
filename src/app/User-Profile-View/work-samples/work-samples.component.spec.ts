import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSamplesComponent } from './work-samples.component';

describe('WorkSamplesComponent', () => {
  let component: WorkSamplesComponent;
  let fixture: ComponentFixture<WorkSamplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkSamplesComponent]
    });
    fixture = TestBed.createComponent(WorkSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
