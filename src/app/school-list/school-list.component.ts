import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolListService } from './school-list.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools: School[];
  searchtext: string;

  constructor(private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getSchools();
  }
 
  getSchools(): void {
    this.schoolListService.getSchools()
    .subscribe(schools => this.schools = schools);
  }

}
