import { Component, OnInit } from '@angular/core';
import { UraProperty, UraMasterProperty } from '../model/property';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IHash } from '../model/ihash';

@Component({
  selector: 'app-property-near-school',
  templateUrl: './property-near-school.component.html',
  styleUrls: ['./property-near-school.component.css']
})
export class PropertyNearSchoolComponent implements OnInit {

  properties: UraProperty[];
  projectHash : IHash = {};

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(): void {
    const schoolname = this.route.snapshot.paramMap.get('school');
    this.schoolListService.getNearbyProperty(schoolname)
      .subscribe(properties => {
        properties.forEach(e => {
          if (this.projectHash[e.project] == undefined) {
            this.projectHash[e.project] = e.distance;
          }
        })

        this.properties = properties.sort((n1: UraProperty, n2: UraProperty) => {
          if(this.projectHash[n1.project] > this.projectHash[n2.project]) {
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
