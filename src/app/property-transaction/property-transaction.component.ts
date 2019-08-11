import { Component, OnInit } from '@angular/core';
import { PTransaction } from '../model/ptransaction';
import { SchoolListService }  from '../school-service/school-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-transaction',
  templateUrl: './property-transaction.component.html',
  styleUrls: ['./property-transaction.component.css']
})
export class PropertyTransactionComponent implements OnInit {

  transactions: PTransaction[];

  constructor(
    private route: ActivatedRoute,
    private schoolListService: SchoolListService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions(): void {
    const pname = this.route.snapshot.paramMap.get('pname');
    this.schoolListService.getPropertyTransactions(pname)
      .subscribe(trans => {
        this.transactions = trans;
      });
  }
}
