import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { School } from '../school';
import { GEP_SCHOOLS } from './gep-schools';
import { SchoolListService }  from '../school-list/school-list.service';

@Component({
  selector: 'app-school-search',
  templateUrl: './school-search.component.html',
  styleUrls: ['./school-search.component.css']
})
export class SchoolSearchComponent implements OnInit {

  schools: School[];
  searchtext: string;
  schoolTag: string;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSchools();
  }

  getSchools(): void {
    const id = +this.route.snapshot.paramMap.get('phaseid');
    this.schoolListService.getSchoolsByPhase(2019,id)
      .subscribe(schools => this.schools = schools);
    this.schoolTag = 'School (>=240)';
  }

  getSmallerSchools(): void {
    const id = +this.route.snapshot.paramMap.get('phaseid');
    this.schoolListService.getSmallerSchoolsByPhase(2019,id,181)
      .subscribe(schools => this.schools = schools);
    this.schoolTag = 'School (<240)';
  }

  keeyGepSchoolsOnly(): void {
    this.schools = this.schools.filter(function(s) {
      return GEP_SCHOOLS.includes(s.school);
    });
  }

  goBack(): void {
    this.location.back();
  }
  
}
