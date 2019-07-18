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

  getSchoolData(): void {
    this.schoolListService.getSchoolsByYearByPhase(2019, 4)
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

        var subSchoolData = [];
        for(var i = 0; i < schools.length; i=i+1) {
          this.barChartLabels.push(schools[i].school);
          subSchoolData.push(Math.round(schools[i].registration/schools[i].availability*100)/100);
        }
        this.barChartData.push({data: subSchoolData, label: "Subsription Rate"});
      });
  }
}
