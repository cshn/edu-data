import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { ActivatedRoute } from '@angular/router';
import { SCHOOL_STATIC } from '../dashboard-school/school-static';

@Component({
  selector: 'app-dashboard-highlight',
  templateUrl: './dashboard-highlight.component.html',
  styleUrls: ['./dashboard-highlight.component.css']
})
export class DashboardHighlightComponent implements OnInit {
  schools: School[] = SCHOOL_STATIC;
  searcht: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
