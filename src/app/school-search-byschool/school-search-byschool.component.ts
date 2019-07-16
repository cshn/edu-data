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
  schoolsByPhase: School[];
  phases: Phase[] = PHASE_STATIC;
  searcht: string;

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
          if(n1.year < n2.year) {
            return 1;
          } else {
            return -1;
          }
        });

        this.schoolsByPhase = schools;
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

  filterByPhase(phaseid: number): void {
    this.schoolsByPhase = this.schools.filter(function(e){
      return phaseid === e.phase;
    });
  }
}
