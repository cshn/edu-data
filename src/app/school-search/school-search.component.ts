import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { School } from '../school';
import { SchoolListService }  from '../school-list/school-list.service';

@Component({
  selector: 'app-school-search',
  templateUrl: './school-search.component.html',
  styleUrls: ['./school-search.component.css']
})
export class SchoolSearchComponent implements OnInit {

  schools: School[];

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getSchools();
  }

  getSchools(): void {
    const id = +this.route.snapshot.paramMap.get('phaseid');
    this.schoolListService.getSchoolsByPhase(id)
      .subscribe(schools => this.schools = schools);
  }

  goBack(): void {
    this.location.back();
  }
  
}
