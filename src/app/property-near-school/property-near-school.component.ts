import { Component, OnInit } from '@angular/core';
import { UraProperty } from '../model/property';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-property-near-school',
  templateUrl: './property-near-school.component.html',
  styleUrls: ['./property-near-school.component.css']
})
export class PropertyNearSchoolComponent implements OnInit {

  filteredProperties: UraProperty[];
  grc: string;

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(): void {
    const schoolname = this.route.snapshot.paramMap.get('school');

    this.schoolListService.getGrcBySchool(schoolname).subscribe(schools => {
      this.grc = schools[0].grc;
    })

    this.schoolListService.getNearbyProperty(schoolname)
      .subscribe(properties => {
        this.filteredProperties = properties.sort((n1: UraProperty, n2: UraProperty) => {
          if(n1.distance > n2.distance) {
            return 1;
          } else {
            return -1;
          }
        });
      });
  }

  goBack(): void {
    this.location.back();
  }
}
