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
  selectedSchoolValue: String;
  school1Data: School[];

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
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [];

  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
  }

  getSchoolData(): void {
    this.barChartData = [];
    this.barChartLabels = [];
    this.schoolListService.getSchoolByPhase(this.selectedPhase, this.selectedSchoolValue)
      .subscribe(schools => {
        this.school1Data = schools.sort((n1: School, n2: School) => {
          if(n1.year > n2.year) {
            return 1;
          } else {
            return -1;
          }
        });
        var regSchoolData = [];
        var avaSchoolData = [];
        for(var i = 0; i < schools.length; i=i+1) {
          this.barChartLabels.push(schools[i].year);
          regSchoolData.push(schools[i].registration);
          avaSchoolData.push(schools[i].availability);
        }
       // console.log(regSchoolData);
       // console.log(avaSchoolData);
        this.barChartData.push({data: regSchoolData, label: "registration"});
        this.barChartData.push({data: avaSchoolData, label: "availability"});
      });
  }

}
