import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySkillComponent } from './key-skill.component';

describe('KeySkillComponent', () => {
  let component: KeySkillComponent;
  let fixture: ComponentFixture<KeySkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeySkillComponent]
    });
    fixture = TestBed.createComponent(KeySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
