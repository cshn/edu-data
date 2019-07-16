import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolListService }  from '../school-service/school-list.service';

@Component({
  selector: 'app-dashboard-highlight',
  templateUrl: './dashboard-highlight.component.html',
  styleUrls: ['./dashboard-highlight.component.css']
})
export class DashboardHighlightComponent implements OnInit {
  schools: School[];

  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getSchoolData();
  }

  getSchoolData(): void {
    this.schoolListService.getSchoolsByYearByPhase(2019, 3)
      .subscribe(schools => {
        this.schools = schools.filter(function(e){
          return (e.availability > 0 && e.availability < e.registration);
        }).sort((n1: School, n2: School) => {
          if(n1.registration/n1.availability < n2.registration/n2.availability) {
            return 1;
          } else {
            return -1;
          }
        });
      });
  }
}
