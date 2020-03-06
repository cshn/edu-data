import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGepComponent } from './dashboard-gep/dashboard-gep.component';
import { DashboardBallotComponent } from './dashboard-ballot/dashboard-ballot.component';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { DashboardAnalysisComponent } from './dashboard-analysis/dashboard-analysis.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { DonationComponent } from './donation/donation.component';
import { PropertyTransactionComponent } from './property-transaction/property-transaction.component';
import { SchoolSearchByschoolComponent } from './school-search-byschool/school-search-byschool.component';
import { PropertyNearSchoolComponent } from './property-near-school/property-near-school.component';
import { MoeKindergardenComponent } from './moe-kindergarden/moe-kindergarden.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PropertyGrcComponent } from './property-grc/property-grc.component';
import { TermsComponent } from './terms/terms.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PostAdsComponent } from './post-ads/post-ads.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboardgep', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardgep', component: DashboardGepComponent },
  { path: 'postads', component: PostAdsComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'dashboardschool', component: DashboardSchoolComponent },
  { path: 'dashboardballot', component: DashboardBallotComponent },
  { path: 'dashboardanalysis', component: DashboardAnalysisComponent },
  { path: 'moekindergarden', component: MoeKindergardenComponent },
  { path: 'schools/:year/:phaseid', component: SchoolSearchComponent },
  { path: 'byschool/:name', component: SchoolSearchByschoolComponent },
  { path: 'transaction/:pname', component: PropertyTransactionComponent },
  { path: 'propertynearby/:school', component: PropertyNearSchoolComponent },
  { path: 'propertygrc/:grc/:school', component: PropertyGrcComponent },
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