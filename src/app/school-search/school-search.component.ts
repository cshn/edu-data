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
  availAsc: boolean;
  registerAsc: boolean;
  subRateAsc: boolean;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSchools();
    this.availAsc = false;
    this.registerAsc = false;
    this.subRateAsc = false;
  }

  getSchools(): void {
    this.phases = PHASE_STATIC;
    const id = +this.route.snapshot.paramMap.get('phaseid');
    const year = +this.route.snapshot.paramMap.get('year');
    this.tag = "Year " + year + ", " + this.phases[id-1].name + " ";
    this.schoolListService.getSchoolsByYearByPhase(year,id)
      .subscribe(schools => {
        schools.forEach( e => {
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

        this.schools = schools.sort((n1: School, n2: School) => {
          if(n1.subrate < n2.subrate) {
            return 1;
          } else {
            return -1;
          }
        });
      });
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
