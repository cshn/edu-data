import { Component, OnInit } from '@angular/core';
import { UraTransaction } from '../model/ptransaction';
import { UraTranDetail } from '../model/ptransaction';
import { Posting } from '../model/posting';
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

  tranMaster: UraTransaction;
  transactionList: UraTranDetail[];
  postings: Posting[];

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService,
    private location: Location) { }

  ngOnInit() {
    this.getTransactions();
    this.getPostings();
  }

  getPostings(): void {
    const pname = this.route.snapshot.paramMap.get('pname');
    this.schoolListService.getPosting(pname)
      .subscribe(posting => {
        this.postings = posting.sort((n1: Posting, n2: Posting) => {
          if(n1.createdon < n2.createdon) {
            return 1;
          } else {
            return -1;
          }
        });
      });
  }

  getTransactions(): void {
    const pname = this.route.snapshot.paramMap.get('pname');
    this.schoolListService.getPropertyTransactions(pname)
      .subscribe(trans => {
        this.tranMaster = trans[0];
        
        this.transactionList = this.tranMaster.transaction.forEach((n: UraTranDetail) => {
          var month = parseInt(n.contractDate.substring(0,2));
          var year = parseInt('20'+n.contractDate.substring(2,4));
          n.cDate = new Date(year, month);
        });
        
        this.transactionList = this.tranMaster.transaction.sort((n1: UraTranDetail, n2: UraTranDetail) => {
          if(n1.cDate < n2.cDate) {
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

  priceHistoryChart(): void {
    this.barChartData = [];
    this.barChartLabels = [];

    var priceData = [];
    for(var i = this.transactionList.length-1; i >= 0; i=i-1) {
      this.barChartLabels.push(moment(this.transactionList[i].cDate).format('YYYY-MM'));
     priceData.push(this.transactionList[i].price);
      // psfData.push(this.transactionList[i].price);
    }
    this.barChartData.push({data: priceData, label: "price"});
    // this.barChartData.push({data: psfData, label: pname + " (psf)"});
    
  }
}
