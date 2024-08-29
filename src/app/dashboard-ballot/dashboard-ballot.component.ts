import { Component, OnInit } from '@angular/core';
import { SchoolListService }  from '../school-service/school-list.service';
import { Phase } from '../dashboard/phase';
import { SchoolBallot } from '../school';
import { PHASE_STATIC_BEFORE_2022 } from '../dashboard/phase-static-before-2022';
import { PHASE_STATIC } from '../dashboard/phase-static';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-ballot',
  templateUrl: './dashboard-ballot.component.html',
  styleUrls: ['./dashboard-ballot.component.css']
})
export class DashboardBallotComponent implements OnInit {
  schools: SchoolBallot[];
  phases: Phase[] = PHASE_STATIC_BEFORE_2022;
  searcht: string;

  selectedYear: number;
  years: number[] = [2019, 2020, 2021, 2022, 2023, 2024];

  constructor(
    private schoolListService: SchoolListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.selectedYear = this.years[this.years.length - 1];
    this.getDataByYear();
  }

  goBack(): void {
    this.location.back();
  }

  getPhase(phaseid: number): String {
    var found = this.phases.find(function(element) {
      return element.id === phaseid;
    });
    return found.name.slice(6);
  }

  getDataByYear(): void {
    if (this.selectedYear > 2021) {
      this.phases = PHASE_STATIC;
    } else {
      this.phases = PHASE_STATIC_BEFORE_2022;
    }
    this.schoolListService.getAllSchoolBallotByYear(this.selectedYear).subscribe(schools => {
      this.schools = schools.sort((n1: SchoolBallot, n2: SchoolBallot) => {
        if(n1.year * 10 + n1.phase < n2.year * 10 + n2.phase) {
          return 1;
        } else {
          return -1;
        }
      });
    })
  }
}
