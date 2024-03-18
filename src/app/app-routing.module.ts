import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Login-Module/signup/signup.component';
import { LoginComponent } from './Login-Module/login/login.component';
import { ForgotpasswordComponent } from './Login-Module/forgotpassword/forgotpassword.component';
import { VerificationComponent } from './Login-Module/verification/verification.component';
import { ConfirmationpasswordComponent } from './Login-Module/confirmationpassword/confirmationpassword.component';






import { UserprofileComponent } from './User-Profile-View/userprofile/userprofile.component';
import { BasicDetailComponent } from './User-Profile-View/basic-detail/basic-detail.component';
import { ResumeHeadlineComponent } from './User-Profile-View/resume-headline/resume-headline.component';
import { KeySkillComponent } from './User-Profile-View/key-skill/key-skill.component';
import { AddEmploymentComponent } from './User-Profile-View/add-employment/add-employment.component';
import { AddEducationComponent } from './User-Profile-View/add-education/add-education.component';
import { ITSkillsComponent } from './User-Profile-View/it-skills/it-skills.component';
import { AddProjectComponent } from './User-Profile-View/add-project/add-project.component';
import { ProfileSummaryComponent } from './User-Profile-View/profile-summary/profile-summary.component';
import { CareerProfileComponent } from './User-Profile-View/career-profile/career-profile.component';
import { PersonalDetailsComponent } from './User-Profile-View/personal-details/personal-details.component';
import { OnlineProfileComponent } from './User-Profile-View/online-profile/online-profile.component';
import { WorkSamplesComponent } from './User-Profile-View/work-samples/work-samples.component';
import { WhitePaperResearchPublicationJournalEntryComponent } from './User-Profile-View/white-paper-research-publication-journal-entry/white-paper-research-publication-journal-entry.component';
import { PresentationComponent } from './User-Profile-View/presentation/presentation.component';
import { PatentComponent } from './User-Profile-View/patent/patent.component';
import { CertificationsComponent } from './User-Profile-View/certifications/certifications.component';
import { JobsearchComponent } from './Job/jobsearch/jobsearch.component';

const routes: Routes = [
  
    { path: 'Signup', component: SignupComponent },
     { path: 'Login', component: LoginComponent },
     { path: 'Forgotpassword', component: ForgotpasswordComponent },
     { path: 'Verification', component: VerificationComponent },
     { path: 'Confirmationpassword', component: ConfirmationpasswordComponent },
     
     { path: 'Userprofile', component: UserprofileComponent },
     { path: 'BasicDetail', component: BasicDetailComponent },
     { path: 'ResumeHeadline', component: ResumeHeadlineComponent },
     { path: 'KeySkill', component: KeySkillComponent },
     { path: 'AddEmployment', component: AddEmploymentComponent },
     { path: 'AddEducation', component: AddEducationComponent },
     { path: 'ITSkills', component: ITSkillsComponent },
     { path: 'AddProject', component: AddProjectComponent },
     { path: 'ProfileSummary', component: ProfileSummaryComponent },
     { path: 'CareerProfile', component: CareerProfileComponent },
     { path: 'PersonalDetails', component: PersonalDetailsComponent },
     { path: 'OnlineProfile', component:OnlineProfileComponent },
     { path: 'WorkSamples', component: WorkSamplesComponent },
     { path: 'WhitePaperResearchPublicationJournalEntry', component: WhitePaperResearchPublicationJournalEntryComponent },
     { path: 'Presentation', component: PresentationComponent },
     { path: 'Patent', component: PatentComponent },
     { path: 'Certifications', component: CertificationsComponent },
     { path: 'JobSearch', component: JobsearchComponent },
    // { path: '', component: SignupComponent},  // Wildcard route for a 404 page
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
