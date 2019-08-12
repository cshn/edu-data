import { Component, OnInit } from '@angular/core';
import { Mk } from '../model/mk';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-moe-kindergarden',
  templateUrl: './moe-kindergarden.component.html',
  styleUrls: ['./moe-kindergarden.component.css']
})
export class MoeKindergardenComponent implements OnInit {

  mks: Mk[];
  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }
  
    ngOnInit() {
      this.getMk();
    }
  
    getMk(): void {
      this.schoolListService.getAllMoeKindergarden()
        .subscribe(mks => {
          this.mks = mks;
          this.mks.forEach(m => {
            m.mkname = m.mkname.split('@')[1].trim();
            m.desc = m.address.split(', ')[1].trim();
          })
        });
    };
}
