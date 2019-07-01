import { Component, OnInit } from '@angular/core';
import { Phase } from './phase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  phases: Phase[] = [  { id: 1, name: '1' },
    { id: 2, name: '2A(1)' },{id: 3, name: '2A(2)' },
    { id: 4, name: '2B' },{id: 5, name: '2C' },
    { id: 6, name: '2CS' },{ id: 7, name: '3' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
