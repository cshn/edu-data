import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { FilterPipe} from './filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { SchoolSearchComponent } from './school-search/school-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { SchoolSearchByschoolComponent } from './school-search-byschool/school-search-byschool.component';
import { DashboardAnalysisComponent } from './dashboard-analysis/dashboard-analysis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';
import { AgGridModule } from 'ag-grid-angular';
import { DashboardBallotComponent } from './dashboard-ballot/dashboard-ballot.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { DashboardGepComponent } from './dashboard-gep/dashboard-gep.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavbarComponent,
    SchoolSearchComponent,
    DashboardComponent,
    DashboardSchoolComponent,
    SchoolSearchByschoolComponent,
    DashboardAnalysisComponent,
    DashboardBallotComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    SitemapComponent,
    DashboardGepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSelectModule,
    ChartsModule,
    AgGridModule.withComponents([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
