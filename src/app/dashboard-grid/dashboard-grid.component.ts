import { Component, OnInit } from '@angular/core';
import { SchoolListService }  from '../school-service/school-list.service';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.css']
})
export class DashboardGridComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
 
  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getAllSchool();
  }

  columnDefs = [
    {headerName: 'School', field: 'school', sortable: true, filter: true},
    {headerName: 'Year', field: 'year', sortable: true, filter: true },
    {headerName: 'Phase', field: 'phase', sortable: true, filter: true},
    {headerName: 'Availability', field: 'availability', sortable: true, filter: true},
    {headerName: 'Registration', field: 'registration', sortable: true, filter: true}
  ];

  rowData = [];

  getAllSchool(): void {
    this.schoolListService.getAllSchool().subscribe(schools => {
      this.rowData = schools;
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
  }
}
