import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SchoolListService }  from '../school-service/school-list.service';
import { AgentService }  from '../agent.service';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.css']
})
export class PostAdsComponent implements OnInit {

  pList: String[];
  regNoList: String[];
  checkoutForm;

  constructor(
    private agentService: AgentService,
    private schoolListService: SchoolListService,
    private formBuilder: FormBuilder,) { 
    this.checkoutForm = this.formBuilder.group({
      property: '',
      salesregno: '',
      price: '',
      bedroom: '',
      size: '',
      mobile: '',
      comment: ''
    });
 }

  ngOnInit() {
    this.getPropertyList();
    this.getAllActiveAgent();
  }

  getPropertyList(): void {
    this.schoolListService.getPropertyList()
      .subscribe(p => {
        this.pList = p;
      });
  };

  getAllActiveAgent(): void {
    this.agentService.getAllAgents()
      .subscribe(agents => {
        this.regNoList = [];
        agents.result.records.forEach( e => {
          this.regNoList.push(e.registration_no);
        })
      });
  };

  onSubmit(customerData) {
    var salesRegNo = customerData.salesregno;
    console.log(salesRegNo);
    if (this.regNoList.indexOf(salesRegNo) > -1) {
      console.warn('Your order has been submitted', customerData);
    } else {
      console.error('Your sales registration no does not exist');
      alert('Your sales registration no ' + salesRegNo + ' does not exist, please input a valid sales registration no');
    }
  }
}