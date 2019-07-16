import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { DashboardAnalysisComponent } from './dashboard-analysis/dashboard-analysis.component';
import { DashboardHighlightComponent } from './dashboard-highlight/dashboard-highlight.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { SchoolSearchByschoolComponent } from './school-search-byschool/school-search-byschool.component';
import { SchoolAnalysisComponent } from './school-analysis/school-analysis.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboardhighlight', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardschool', component: DashboardSchoolComponent },
  { path: 'dashboardanalysis', component: DashboardAnalysisComponent },
  { path: 'dashboardhighlight', component: DashboardHighlightComponent },
  { path: 'schools/:year/:phaseid', component: SchoolSearchComponent },
  { path: 'byschool/:name', component: SchoolSearchByschoolComponent },
  { path: 'schoolanalysis', component: SchoolAnalysisComponent },
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