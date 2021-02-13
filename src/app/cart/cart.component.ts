import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any;
  checkoutForm:any;
  constructor(private carService:CartService, 
  private formBuilder: FormBuilder,) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address:''
    });
  }
  onSubmit(customerData:any){
    this.items = this.carService.clearClear();
    this.checkoutForm.reset();
    console.warn('your order has been submitted', customerData);
  }
  ngOnInit() {
    this.items = this.carService.getItems();
  }

}