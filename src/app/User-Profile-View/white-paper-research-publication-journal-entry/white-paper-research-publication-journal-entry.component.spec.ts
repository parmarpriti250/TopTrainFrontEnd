import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePaperResearchPublicationJournalEntryComponent } from './white-paper-research-publication-journal-entry.component';

describe('WhitePaperResearchPublicationJournalEntryComponent', () => {
  let component: WhitePaperResearchPublicationJournalEntryComponent;
  let fixture: ComponentFixture<WhitePaperResearchPublicationJournalEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhitePaperResearchPublicationJournalEntryComponent]
    });
    fixture = TestBed.createComponent(WhitePaperResearchPublicationJournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
