import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationpasswordComponent } from './confirmationpassword.component';

describe('ConfirmationpasswordComponent', () => {
  let component: ConfirmationpasswordComponent;
  let fixture: ComponentFixture<ConfirmationpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationpasswordComponent]
    });
    fixture = TestBed.createComponent(ConfirmationpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
