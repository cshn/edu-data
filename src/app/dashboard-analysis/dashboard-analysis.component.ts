import { Component, OnInit } from '@angular/core';
import { Phase } from '../dashboard/phase';
import { PHASE_STATIC } from '../dashboard/phase-static';
import { School } from '../school';
import { SCHOOL_STATIC } from '../dashboard-school/school-static';
import { SchoolListService }  from '../school-service/school-list.service';

@Component({
  selector: 'app-dashboard-analysis',
  templateUrl: './dashboard-analysis.component.html',
  styleUrls: ['./dashboard-analysis.component.css']
})
export class DashboardAnalysisComponent implements OnInit {
  phases: Phase[] = PHASE_STATIC;
  schools: School[] = SCHOOL_STATIC;
  selectedPhase: number;
  selectedSchool1: String;
  selectedSchool2: String;
  school1Data: School[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
  }

  getTwoSchoolData(): void {
    this.barChartData = [];
    this.schoolListService.getSchoolByPhase(this.selectedPhase, this.selectedSchool1)
      .subscribe(schools => {
        this.school1Data = schools.sort((n1: School, n2: School) => {
          if(n1.year > n2.year) {
            return 1;
          } else {
            return -1;
          }
        });
        var oneSchoolData = [];
        for(var i = 0; i < schools.length; i=i+1) {
          this.barChartLabels.push(schools[i].year);
          oneSchoolData.push(schools[i].registration/schools[i].availability);
        }
        this.barChartData.push({data: oneSchoolData, label: this.selectedSchool1.toString()});
      });

    this.schoolListService.getSchoolByPhase(this.selectedPhase, this.selectedSchool2)
      .subscribe(schools => {
        this.school1Data = schools.sort((n1: School, n2: School) => {
          if(n1.year > n2.year) {
            return 1;
          } else {
            return -1;
          }
        });
        var oneSchoolData = [];
        for(var i = 0; i < schools.length; i=i+1) {
          oneSchoolData.push(schools[i].registration/schools[i].availability);
        }
        this.barChartData.push({data: oneSchoolData, label: this.selectedSchool2.toString()});
      });
  }

}
