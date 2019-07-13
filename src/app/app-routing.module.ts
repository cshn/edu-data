import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboardschool', component: DashboardSchoolComponent },
  { path: 'schools/:year/:phaseid', component: SchoolSearchComponent },
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