import { Component, OnInit } from '@angular/core';
import { Phase } from '../dashboard/phase';
import { PHASE_STATIC } from '../dashboard/phase-static';
import { School } from '../school';
import { SCHOOL_STATIC } from '../dashboard-school/school-static';
import { SchoolListService }  from '../school-service/school-list.service';

@Component({
  selector: 'app-dashboard-phase-analysis',
  templateUrl: './dashboard-phase-analysis.component.html',
  styleUrls: ['./dashboard-phase-analysis.component.css']
})
export class DashboardPhaseAnalysisComponent implements OnInit {
  years: number[] = [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];
  schools: School[] = SCHOOL_STATIC;
  selectedYear: number;
  selectedSchoolValue: String;
  schoolData: School[];

  ngOnInit() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels = [];
  public barChartType = 'pie';
  public barChartLegend = true;
  public barChartData = [];

  constructor(private schoolListService: SchoolListService) { }

  getSchoolData(): void {
    this.barChartData = [];
    this.barChartLabels = [];
    this.schoolListService.getSchoolByYear(this.selectedYear, this.selectedSchoolValue)
      .subscribe(schools => {
        this.schoolData = schools.sort((n1: School, n2: School) => {
          if(n1.phase > n2.phase) {
            return 1;
          } else {
            return -1;
          }
        });
        var regSchoolData = [];
        for(var i = 0; i < schools.length; i=i+1) {
          this.barChartLabels.push(schools[i].phase);
          regSchoolData.push(schools[i].registration);
        }
        this.barChartData.push({data: regSchoolData, label: "registration"});
      });
  }
}
