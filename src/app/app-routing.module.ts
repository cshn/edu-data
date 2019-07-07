import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolSearchComponent }      from './school-search/school-search.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'schools/:phaseid', component: SchoolSearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}