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
  phases: Phase[] = PHASE_STATIC;
  selectedYear: number;
  selectedPhase: number;
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
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  constructor(private schoolListService: SchoolListService) { 
    this.years.sort((n1: number, n2: number) => {
      if(n1 < n2) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  getSchoolData(): void {
    this.barChartData = [];
    this.barChartLabels = [];
    this.schoolListService.getSchoolsByYearByPhase(this.selectedYear, this.selectedPhase)
      .subscribe(schools => {
        this.schoolData = schools;
        
        var subSchoolData = [];
        for(var i = 0; i < schools.length; i=i+1) {
          this.barChartLabels.push(schools[i].school);
          subSchoolData.push(Math.round(schools[i].registration/schools[i].availability*100)/100);
        }
        this.barChartData.push({data: subSchoolData, label: "Subsription Rate"});
      });
  }
}
