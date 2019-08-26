import { Component, OnInit } from '@angular/core';
import { GrcProperty } from '../model/property';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IStringHash } from '../model/ihash';


@Component({
  selector: 'app-property-grc',
  templateUrl: './property-grc.component.html',
  styleUrls: ['./property-grc.component.css']
})
export class PropertyGrcComponent implements OnInit {

  grcProperties: GrcProperty[];
  school: string;
  projectHash : IStringHash = {};
  distanceAsc: boolean;

  constructor(private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getProperties();
    this.distanceAsc = false;
  }

  getProperties(): void {
    const grc = this.route.snapshot.paramMap.get('grc');
    this.school = this.route.snapshot.paramMap.get('school');
    this.schoolListService.getPropertyByGrc(grc)
      .subscribe(properties => {
        this.grcProperties = properties;

        this.grcProperties.forEach(e => {
          this.projectHash[this.school+e.project+e.blk] = ">2km";
          this.schoolListService.getNearbyPropertyBySchoolByBlk(this.school,e.project,e.blk)
            .subscribe(p => {
              this.projectHash[this.school+e.project+e.blk] = p[0].distance.toFixed(3).toString() + "km";
            })
        })
      })
  }

  goBack(): void {
    this.location.back();
  }

  orderByDistance(): void {
    if (this.distanceAsc) {
      this.grcProperties.sort((n1: GrcProperty, n2: GrcProperty) => {
        if(this.projectHash[this.school+n1.project+n1.blk] < this.projectHash[this.school+n2.project+n2.blk]) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      this.grcProperties.sort((n1: GrcProperty, n2: GrcProperty) => {
        if(this.projectHash[this.school+n1.project+n1.blk] > this.projectHash[this.school+n2.project+n2.blk]) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    this.distanceAsc = !this.distanceAsc;
  }
}
