import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolListService }  from '../school-service/school-list.service';
import { Phase } from '../dashboard/phase';
import { PHASE_STATIC } from '../dashboard/phase-static';

@Component({
  selector: 'app-dashboard-highlight',
  templateUrl: './dashboard-highlight.component.html',
  styleUrls: ['./dashboard-highlight.component.css']
})
export class DashboardHighlightComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  phases: Phase[] = PHASE_STATIC;

  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getSchoolData();
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

  getSchoolData(): void {
    this.schoolListService.getSchoolsByYearByPhase(2019, 5)
      .subscribe(schools => {
        this.rowData = schools.filter(function(e){
          return (e.availability > 0);
        }).sort((n1: School, n2: School) => {
          if(n1.registration/n1.availability < n2.registration/n2.availability) {
            return 1;
          } else {
            return -1;
          }
        });

        this.rowData.forEach( e => {
          e.phase = this.phases[e.phase-1].name;
          if (e.availability) {
            e.subrate = Math.round(e.registration/e.availability*1000)/1000;
          } else {
            e.subrate = 0;
          }
        })
      });
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
  }
}
