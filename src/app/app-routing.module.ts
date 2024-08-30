import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGepComponent } from './dashboard-gep/dashboard-gep.component';
import { DashboardBallotComponent } from './dashboard-ballot/dashboard-ballot.component';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { DashboardAnalysisComponent } from './dashboard-analysis/dashboard-analysis.component';
import { SchoolSearchByschoolComponent } from './school-search-byschool/school-search-byschool.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboardgep', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardgep', component: DashboardGepComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'dashboardschool', component: DashboardSchoolComponent },
  { path: 'dashboardballot', component: DashboardBallotComponent },
  { path: 'dashboardanalysis', component: DashboardAnalysisComponent },
  { path: 'schools/:year/:phaseid', component: SchoolSearchComponent },
  { path: 'byschool/:name', component: SchoolSearchByschoolComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}