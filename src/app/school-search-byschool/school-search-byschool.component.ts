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
  availAsc: boolean;
  registerAsc: boolean;
  subRateAsc: boolean;
  yearAsc: boolean;
  maxprAsc: boolean;
  selectedPhase: number;
  currentSchoolName: String;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getSchools();
    this.availAsc = false;
    this.registerAsc = false;
    this.subRateAsc = false;
    this.yearAsc = true;
    this.maxprAsc = false;
  }

  getSchoolDataByPhase(): void {
    this.schoolListService.getSchoolByPhase(this.selectedPhase, this.currentSchoolName)
      .subscribe(schools => {
        this.schools = schools.sort((n1: School, n2: School) => {
          if(n1.year < n2.year) {
            return 1;
          } else {
            return -1;
          }
        });
        this.schools.forEach( e => {
          if (e.registration > 0) {
            if (e.availability < e.registration) {
              e.subrate = Math.round(e.availability/e.registration*1000)/1000;
            } else {
              e.subrate = 1;
            }
          } else {
            e.subrate = 0;
          }
        })
      });
  }

  getSchools(): void {
    const schoolname = this.route.snapshot.paramMap.get('name');
    this.currentSchoolName = schoolname;
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
          if (e.registration > 0) {
            if (e.availability < e.registration) {
              e.subrate = Math.round(e.availability/e.registration*1000)/1000;
            } else {
              e.subrate = 1;
            }
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

  orderBySubRate(): void {
    if (this.subRateAsc) {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.subrate < n2.subrate) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.subrate > n2.subrate) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    this.subRateAsc = !this.subRateAsc;
  }

  orderByAvailability(): void {
    if(this.availAsc) {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.availability < n2.availability) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.availability > n2.availability) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    this.availAsc = !this.availAsc;
  }

  orderByRegistration(): void {
    if(this.registerAsc) {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.registration < n2.registration) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.registration > n2.registration) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    this.registerAsc = !this.registerAsc;
  }

  orderByYear(): void {
    if(this.yearAsc) {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.year < n2.year) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.year > n2.year) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    this.yearAsc = !this.yearAsc;
  }

  orderByMaxPrAvai(): void {
    if(this.maxprAsc) {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.maxprnum < n2.maxprnum) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.schools.sort((n1: School, n2: School) => {
        if(n1.maxprnum > n2.maxprnum) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    this.maxprAsc = !this.maxprAsc;
  }
}
