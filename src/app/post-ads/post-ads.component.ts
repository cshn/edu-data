import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SchoolListService }  from '../school-service/school-list.service';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.css']
})
export class PostAdsComponent implements OnInit {

  checkoutForm;

  constructor(
    private schoolListService: SchoolListService,
    private formBuilder: FormBuilder,) { 
    this.checkoutForm = this.formBuilder.group({
      price: '',
      bedroom: '',
      mobile: ''
    });
 }

  ngOnInit() {
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
  }
}