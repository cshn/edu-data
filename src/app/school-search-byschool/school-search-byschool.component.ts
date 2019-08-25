import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Phase } from '../dashboard/phase';
import { PHASE_STATIC } from '../dashboard/phase-static';

@Component({
  selector: 'app-school-search-byschool',
  templateUrl: './school-search-byschool.component.html',
  styleUrls: ['./school-search-byschool.component.css']
})
export class SchoolSearchByschoolComponent implements OnInit {

  schools: School[];
  phases: Phase[] = PHASE_STATIC;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getSchools();
  }

  getSchools(): void {
    const schoolname = this.route.snapshot.paramMap.get('name');
    this.schoolListService.getSchoolBySchool(schoolname)
      .subscribe(schools => {
        this.schools = schools.sort((n1: School, n2: School) => {
          if(n1.year * 10 + n1.phase < n2.year * 10 + n2.phase) {
            return 1;
          } else {
            return -1;
          }
        });
        this.schools.forEach( e => {
          if (e.availability) {
            e.subrate = Math.round(e.registration/e.availability*1000)/1000;
          } else {
            e.subrate = 0;
          }
        })
      });
  }

  getPhase(phaseid: number): String {
    var found = this.phases.find(function(element) {
      return element.id === phaseid;
    });
    return found.name;
  }

  goBack(): void {
    this.location.back();
  }
}
