import { Component, OnInit } from '@angular/core';
import { UraProperty, UraMasterProperty } from '../model/property';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IHash,IStringHash } from '../model/ihash';

@Component({
  selector: 'app-property-near-school',
  templateUrl: './property-near-school.component.html',
  styleUrls: ['./property-near-school.component.css']
})
export class PropertyNearSchoolComponent implements OnInit {

  properties: UraProperty[];
  filteredProperties: UraProperty[];
  projectSet = new Set();
  projectType : IStringHash = {};
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
          this.projectSet.add(e.project);
          if (this.projectHash[e.project] == undefined) {
            this.projectHash[e.project] = e.distance;
          }
        })

        this.filteredProperties = properties.sort((n1: UraProperty, n2: UraProperty) => {
          if(this.projectHash[n1.project] > this.projectHash[n2.project]) {
            return 1;
          } else {
            return -1;
          }
        });

        this.properties = this.filteredProperties;

        this.projectSet.forEach(e => {
          this.schoolListService.getPropertyTransactions(e)
          .subscribe(trans => {
            this.projectType[e] = trans[0].transaction[0].propertyType;
          });
        })

      });
  }

  filterByType(): void {
    this.filteredProperties = this.filteredProperties.filter(p => {
      if (this.projectType[p.project] == "Condominium" || this.projectType[p.project] == "Executive Condominium" || this.projectType[p.project] == "Apartment") {
        return true;
      } else {
        return false;
      }
    });
  }

  getAll(): void {
    this.filteredProperties = this.properties;
  }

  goBack(): void {
    this.location.back();
  }
}
