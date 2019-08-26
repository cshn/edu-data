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
import { CallbackComponent } from './callback/callback.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardSchoolComponent } from './dashboard-school/dashboard-school.component';
import { SchoolSearchByschoolComponent } from './school-search-byschool/school-search-byschool.component';
import { DashboardAnalysisComponent } from './dashboard-analysis/dashboard-analysis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';
import { DashboardHighlightComponent } from './dashboard-highlight/dashboard-highlight.component';
import { AgGridModule } from 'ag-grid-angular';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardGridComponent } from './dashboard-grid/dashboard-grid.component';
import { DashboardBallotComponent } from './dashboard-ballot/dashboard-ballot.component';
import { DonationComponent } from './donation/donation.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { PropertyNearSchoolComponent } from './property-near-school/property-near-school.component';
import { PropertyTransactionComponent } from './property-transaction/property-transaction.component';
import { MoeKindergardenComponent } from './moe-kindergarden/moe-kindergarden.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PostAdsComponent } from './post-ads/post-ads.component';
import { PropertyGrcComponent } from './property-grc/property-grc.component';

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
    SchoolSearchByschoolComponent,
    DashboardAnalysisComponent,
    DashboardHighlightComponent,
    SideBarComponent,
    DashboardGridComponent,
    DashboardBallotComponent,
    DonationComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    PropertyNearSchoolComponent,
    PropertyTransactionComponent,
    MoeKindergardenComponent,
    SitemapComponent,
    PostAdsComponent,
    PropertyGrcComponent
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
