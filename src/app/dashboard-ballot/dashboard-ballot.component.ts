import { Component, OnInit } from '@angular/core';
import { SchoolListService }  from '../school-service/school-list.service';
import { Phase } from '../dashboard/phase';
import { SchoolBallot } from '../school';
import { PHASE_STATIC } from '../dashboard/phase-static';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-ballot',
  templateUrl: './dashboard-ballot.component.html',
  styleUrls: ['./dashboard-ballot.component.css']
})
export class DashboardBallotComponent implements OnInit {
  schools: SchoolBallot[];
  phases: Phase[] = PHASE_STATIC;

  constructor(
    private schoolListService: SchoolListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getAllSchoolBallot();

  }

  getAllSchoolBallot(): void {
    this.schoolListService.getAllSchoolBallot().subscribe(schools => {
      this.schools = schools.sort((n1: SchoolBallot, n2: SchoolBallot) => {
        if(n1.year * 10 + n1.phase < n2.year * 10 + n2.phase) {
          return 1;
        } else {
          return -1;
        }
      });
    })
  }

  goBack(): void {
    this.location.back();
  }

  getPhase(phaseid: number): String {
    var found = this.phases.find(function(element) {
      return element.id === phaseid;
    });
    return found.name;
  }
}
