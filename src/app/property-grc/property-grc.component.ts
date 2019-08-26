import { Component, OnInit } from '@angular/core';
import { GrcProperty } from '../model/property';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-property-grc',
  templateUrl: './property-grc.component.html',
  styleUrls: ['./property-grc.component.css']
})
export class PropertyGrcComponent implements OnInit {

  grcProperties: GrcProperty[];
  school: string;

  constructor(private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(): void {
    const grc = this.route.snapshot.paramMap.get('grc');
    this.school = this.route.snapshot.paramMap.get('school');
    this.schoolListService.getPropertyByGrc(grc)
      .subscribe(properties => {
        this.grcProperties = properties;
      })
    this.grcProperties.forEach(e => {
      this.schoolListService.getNearbyPropertyBySchoolByBlk(this.school, e.project, e.blk)
        .subscribe(properties => {
          e.distance = properties[0].distance;
        })
    })
  }

  goBack(): void {
    this.location.back();
  }

}
