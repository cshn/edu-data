import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { School } from '../school';
import { SCHOOL_STATIC } from './school-static';

@Component({
  selector: 'app-dashboard-school',
  templateUrl: './dashboard-school.component.html',
  styleUrls: ['./dashboard-school.component.css']
})
export class DashboardSchoolComponent implements OnInit {

  schools: School[] = SCHOOL_STATIC;
  searcht: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }


}
