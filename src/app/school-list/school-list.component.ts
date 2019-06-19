import { Component, OnInit } from '@angular/core';
import { School } from '../school';
import { SCHOOLS } from '../mock-school';


@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools = SCHOOLS;

  constructor() { }

  ngOnInit() {
  }

}
