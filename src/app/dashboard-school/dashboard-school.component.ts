import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolGrc } from '../school';
import { SchoolListService }  from '../school-service/school-list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-school',
  templateUrl: './dashboard-school.component.html',
  styleUrls: ['./dashboard-school.component.css']
})
export class DashboardSchoolComponent implements OnInit {

  schools: SchoolGrc[];
  searcht: string;

  constructor(private route: ActivatedRoute, private schoolListService: SchoolListService, private location: Location) { }

  ngOnInit() {
    this.getAllSchool();
  }

  goBack(): void {
    this.location.back();
  }

  getAllSchool(): void {
    this.schoolListService.getAllSchoolWithGrc().subscribe(schools => {
      this.schools = schools.sort((n1: SchoolGrc, n2: SchoolGrc) => {
        if(n1.school > n2.school) {
          return 1;
        } else {
          return -1;
        }
      });
    })
  }

}
