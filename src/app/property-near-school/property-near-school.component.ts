import { Component, OnInit } from '@angular/core';
import { Property } from '../model/property';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-property-near-school',
  templateUrl: './property-near-school.component.html',
  styleUrls: ['./property-near-school.component.css']
})
export class PropertyNearSchoolComponent implements OnInit {

  properties: Property[];

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
        this.properties = properties.sort((n1: Property, n2: Property) => {
          if(n1.psf > n2.psf) {
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
