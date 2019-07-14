import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-school-search-byschool',
  templateUrl: './school-search-byschool.component.html',
  styleUrls: ['./school-search-byschool.component.css']
})
export class SchoolSearchByschoolComponent implements OnInit {

  schools: School[];
  searcht: string;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getSchools();
  }

  getSchools(): void {
    const schoolname = this.route.snapshot.paramMap.get('name');
    this.schoolListService.getSchoolBySchool(schoolname)
      .subscribe(schools => this.schools = schools);
  }

  goBack(): void {
    this.location.back();
  }
}
