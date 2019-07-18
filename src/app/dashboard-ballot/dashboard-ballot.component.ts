import { Component, OnInit } from '@angular/core';
import { SchoolListService }  from '../school-service/school-list.service';
import { School } from '../school';

@Component({
  selector: 'app-dashboard-ballot',
  templateUrl: './dashboard-ballot.component.html',
  styleUrls: ['./dashboard-ballot.component.css']
})
export class DashboardBallotComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getAllSchoolBallot();
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
    })
  }
  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
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
  }

}
