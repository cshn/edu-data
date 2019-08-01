import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardBallotComponent } from './dashboard-ballot/dashboard-ballot.component';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { DashboardAnalysisComponent } from './dashboard-analysis/dashboard-analysis.component';
import { DashboardPhaseAnalysisComponent } from './dashboard-phase-analysis/dashboard-phase-analysis.component';
import { DashboardHighlightComponent } from './dashboard-highlight/dashboard-highlight.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { SchoolSearchByschoolComponent } from './school-search-byschool/school-search-byschool.component';
import { SchoolAnalysisComponent } from './school-analysis/school-analysis.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'dashboardgrid', component: DashboardGridComponent },
  { path: 'dashboardschool', component: DashboardSchoolComponent },
  { path: 'dashboardballot', component: DashboardBallotComponent },
  { path: 'dashboardanalysis', component: DashboardAnalysisComponent },
  { path: 'dashboardphaseanalysis', component: DashboardPhaseAnalysisComponent },
  { path: 'dashboardhighlight', component: DashboardHighlightComponent },
  { path: 'schools/:year/:phaseid', component: SchoolSearchComponent },
  { path: 'byschool/:name', component: SchoolSearchByschoolComponent },
  { path: 'schoolanalysis', component: SchoolAnalysisComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'callback', component: CallbackComponent},
  {
    path: 'profile',
    component: ProfileComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}