import { Component, OnInit } from '@angular/core';
import { PTransaction } from '../model/ptransaction';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-property-transaction',
  templateUrl: './property-transaction.component.html',
  styleUrls: ['./property-transaction.component.css']
})
export class PropertyTransactionComponent implements OnInit {

  transactions: PTransaction[];

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getTransactions();
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [];

  getTransactions(): void {
    const pname = this.route.snapshot.paramMap.get('pname');
    this.schoolListService.getPropertyTransactions(pname)
      .subscribe(trans => {
        this.transactions = trans;
      });
  }

  goBack(): void {
    this.location.back();
  }

  priceHistoryChart(): void {
    this.barChartData = [];
    this.barChartLabels = [];

    var priceData = [];
    var psfData = [];
    var pname = this.transactions[0].pname;
    for(var i = this.transactions.length-1; i >= 0; i=i-1) {
      this.barChartLabels.push(moment(this.transactions[i].date).format('YYYY-MM'));
   //   priceData.push(this.transactions[i].price);
      psfData.push(this.transactions[i].psf);
    }
    //this.barChartData.push({data: priceData, label: "price"});
    this.barChartData.push({data: psfData, label: pname + " (psf)"});
    
  }
}
