import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Phase } from '../dashboard/phase';
import { PHASE_STATIC } from '../dashboard/phase-static';

@Component({
  selector: 'app-school-search-byschool',
  templateUrl: './school-search-byschool.component.html',
  styleUrls: ['./school-search-byschool.component.css']
})
export class SchoolSearchByschoolComponent implements OnInit {

  schools: School[];
  phases: Phase[] = PHASE_STATIC;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }
    
    private gridApi;
    private gridColumnApi;

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
    const schoolname = this.route.snapshot.paramMap.get('name');
    this.schoolListService.getSchoolBySchool(schoolname)
      .subscribe(schools => {
        this.rowData = schools.sort((n1: School, n2: School) => {
          if(n1.year < n2.year) {
            return 1;
          } else {
            return -1;
          }
        });
        this.rowData.forEach( e => {
          e.phase = this.getPhase(e.phase);
          if (e.availability) {
            e.subrate = Math.round(e.registration/e.availability*1000)/1000;
          } else {
            e.subrate = 0;
          }
        })
      });
  }

  getPhase(phaseid: number): String {
    var found = this.phases.find(function(element) {
      return element.id === phaseid;
    });
    return found.name;
  }

  goBack(): void {
    this.location.back();
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
