import { Component, OnInit } from '@angular/core';
import { Phase } from './phase';
import { PHASE_STATIC } from './phase-static';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  phases: Phase[] = PHASE_STATIC;

  constructor() { }

  ngOnInit() {
  }

}
