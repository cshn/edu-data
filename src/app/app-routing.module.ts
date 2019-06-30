import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolListComponent }      from './school-list/school-list.component';

const routes: Routes = [
  { path: 'schools', component: SchoolListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}