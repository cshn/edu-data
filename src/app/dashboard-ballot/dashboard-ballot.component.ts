import { Component, OnInit } from '@angular/core';
import { SchoolListService }  from '../school-service/school-list.service';
import { Phase } from '../dashboard/phase';
import { PHASE_STATIC } from '../dashboard/phase-static';

@Component({
  selector: 'app-dashboard-ballot',
  templateUrl: './dashboard-ballot.component.html',
  styleUrls: ['./dashboard-ballot.component.css']
})
export class DashboardBallotComponent implements OnInit {
  phases: Phase[] = PHASE_STATIC;
  phaseMap: any;
  private gridApi;
  private gridColumnApi;
  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getAllSchoolBallot();

    this.phaseMap = {};
    for (var i = 0; this.phases.length > i; i += 1) {
      this.phaseMap[this.phases[i].id] = this.phases[i].name;
    }

  }

  columnDefs = [
    {headerName: 'Year', field: 'year', resizable: true, sortable: true, filter: true },
    {headerName: 'Phase', field: 'phase', resizable: true, sortable: true, filter: true},
    {headerName: 'School', field: 'school', resizable: true, sortable: true, filter: true},
    {headerName: 'Ballot', field: 'ballot', resizable: true, sortable: true, filter: true},
    {headerName: 'Description', field: 'ballotdesc', resizable: true, filter: true}
  ];

  rowData = [];

  getAllSchoolBallot(): void {
    this.schoolListService.getAllSchoolBallot().subscribe(schools => {
      this.rowData = schools;
      this.rowData.forEach(element => {
        element.phase = this.phaseMap[element.phase];
      });
    })
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
