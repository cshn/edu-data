import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SchoolListService }  from '../school-service/school-list.service';
import { AgentService }  from '../agent.service';
import { Posting } from '../model/posting';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.css']
})
export class PostAdsComponent implements OnInit {

  pList: String[];
  regNoList: String[];
  checkoutForm;
  saveMessage : String;
  postings: Posting[];

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
    this.getAllPosting();
  }

  getPropertyList(): void {
    this.schoolListService.getPropertyList()
      .subscribe(p => {
        this.pList = p;
      });
  };

  getAllPosting(): void {
    this.schoolListService.getAllPosting()
      .subscribe(p => {
        this.postings = p;
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
      this.schoolListService.saveAdvertisement(customerData.property, customerData.salesregno, customerData.price, customerData.bedroom,
        customerData.size, customerData.mobile, customerData.comment).subscribe(p => {
          this.saveMessage = p;
        });
      console.warn('Your order has been submitted', customerData);
    } else {
      console.error('Your sales registration no does not exist');
      alert('Your sales registration no ' + salesRegNo + ' does not exist, please input a valid sales registration no');
    }
  }
}