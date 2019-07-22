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
  private gridApi;
  private gridColumnApi;
  showbutton = 0;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSchools();
  }

  columnDefs = [
    {headerName: 'School', field: 'school', resizable: true,sortable: true, filter: true},
    {headerName: 'Year', field: 'year', resizable: true,sortable: true, filter: true },
    {headerName: 'Phase', field: 'phase', resizable: true,sortable: true, filter: true},
    {headerName: 'Availability', field: 'availability', resizable: true,sortable: true, filter: true},
    {headerName: 'Registration', field: 'registration', resizable: true,sortable: true, filter: true},
    {headerName: 'Subscription Rate', field: 'subrate', resizable: true,sortable: true, filter: true}
  ];

  rowData = [];

  getSchools(): void {
    this.phases = PHASE_STATIC;
    const id = +this.route.snapshot.paramMap.get('phaseid');
    const year = +this.route.snapshot.paramMap.get('year');
    this.tag = "Year " + year + ", " + this.phases[id-1].name + " ";
    this.schoolListService.getSchoolsByYearByPhase(year,id)
      .subscribe(schools => {
        this.rowData = schools.sort((n1: School, n2: School) => {
          if(n1.year < n2.year) {
            return 1;
          } else {
            return -1;
          }
        });
        this.rowData.forEach( e => {
          e.phase = this.phases[e.phase-1].name;
          if (e.availability > 0) {
            e.subrate = Math.round(e.registration/e.availability*1000)/1000;
          } else {
            e.subrate = 0;
          }
        })
      });
  }

  goBack(): void {
    this.location.back();
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            return (value * 100).toFixed(0) + '%'; // convert it to percentage
          }
        }
      }]
    }
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];

  topSchool(): void {
    this.barChartData = [];
    this.barChartLabels = [];
    this.rowData.forEach(e => {
      if(e.subrate > 0) {
        this.barChartLabels.push(e.school);
      }
    })
    this.rowData.sort(function(first, second) {
      return second.subrate - first.subrate;
    });
    
    //Result
    var chartData = [];
    this.barChartLabels = [];
    this.rowData.slice(0,10).forEach(e => {
      this.barChartLabels.push(e.school);
      chartData.push(e.subrate);
    })

    this.barChartData.push({data: chartData, label: "Top 10 Difficult to Enter School"});
    
  }

  autoSizeAll() {
    var allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach(function(column) {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.autoSizeAll();
    this.showbutton = 1;
  }
  
}
