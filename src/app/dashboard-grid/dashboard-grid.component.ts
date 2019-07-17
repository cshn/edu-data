import { Component, OnInit } from '@angular/core';
import { SchoolListService }  from '../school-service/school-list.service';
import { School } from '../school';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.css']
})
export class DashboardGridComponent implements OnInit {
  schools: School[];
  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getAllSchool();
  }

  columnDefs = [
    {headerName: 'School', field: 'school', filter: true},
    {headerName: 'Year', field: 'year', filter: true },
    {headerName: 'Phase', field: 'phase', filter: true},
    {headerName: 'Availability', field: 'availability', filter: true},
    {headerName: 'Registration', field: 'registration', filter: true}
  ];

  rowData = [{school: 'Nan Hua', year: 2019, phase: 1, availability: 100, registration: 200}];

  getAllSchool(): void {
    //this.rowData.push({school: 'Nanyang', year: 2019, phase: 1, availability: 100, registered: 200});
    this.schoolListService.getAllSchool().subscribe(schools => {
      console.log(schools.length);
      this.rowData = schools;
    })
  }
}
