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
      .subscribe(schools => this.schools = schools);
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
