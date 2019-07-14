import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { FilterPipe} from './filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { SchoolSearchByschoolComponent } from './school-search-byschool/school-search-byschool.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavbarComponent,
    SchoolSearchComponent,
    DashboardComponent,
    CallbackComponent,
    ProfileComponent,
    DashboardSchoolComponent,
    SchoolSearchByschoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
