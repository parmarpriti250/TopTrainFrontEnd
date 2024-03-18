import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineProfileComponent } from './online-profile.component';

describe('OnlineProfileComponent', () => {
  let component: OnlineProfileComponent;
  let fixture: ComponentFixture<OnlineProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineProfileComponent]
    });
    fixture = TestBed.createComponent(OnlineProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
