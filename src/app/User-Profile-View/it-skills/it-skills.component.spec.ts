import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITSkillsComponent } from './it-skills.component';

describe('ITSkillsComponent', () => {
  let component: ITSkillsComponent;
  let fixture: ComponentFixture<ITSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITSkillsComponent]
    });
    fixture = TestBed.createComponent(ITSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
