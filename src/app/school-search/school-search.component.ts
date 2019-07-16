import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { School } from '../school';
import { SchoolListService }  from '../school-service/school-list.service';
import { Phase } from '../dashboard/phase';
import { PHASE_STATIC } from '../dashboard/phase-static';

@Component({
  selector: 'app-school-search',
  templateUrl: './school-search.component.html',
  styleUrls: ['./school-search.component.css']
})
export class SchoolSearchComponent implements OnInit {

  schools: School[];
  searchtext: string;
  tag: string;
  phases: Phase[] = PHASE_STATIC;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSchools();
  }

  getSchools(): void {
    this.phases = PHASE_STATIC;
    const id = +this.route.snapshot.paramMap.get('phaseid');
    const year = +this.route.snapshot.paramMap.get('year');
    this.phases.filter(function(p){
      return (p.id === id);
    })
    this.tag = "Year " + year + ", " + this.phases[0].name + " ";
    this.schoolListService.getSchoolsByYearByPhase(year,id)
      .subscribe(schools => this.schools = schools);
  }

  goBack(): void {
    this.location.back();
  }

  sortBySize(): void {
    this.schools.sort((n1: School, n2: School) => {
       return n1.size < n2.size ? 1 : -1;
    })
  }
  sortByAvailability(): void {
    this.schools.sort((n1: School, n2: School) => {
       return n1.availability < n2.availability ? 1 : -1;
    })
  }
  sortByRegister(): void {
    this.schools.sort((n1: School, n2: School) => {
       return n1.registration < n2.registration ? 1 : -1;
    })
  }
  sortBySubscribe(): void {
    this.schools.sort((n1: School, n2: School) => {
      if (n1.availability > 0 && n2.availability > 0) {
        return n1.registration/n1.availability < n2.registration/n2.availability ? 1 : -1;
      } else {
        return 1;
      }
    })
  }
  
}
