import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AuthService } from './auth.service';
import { SchoolListComponent } from './school-list/school-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SchoolListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
