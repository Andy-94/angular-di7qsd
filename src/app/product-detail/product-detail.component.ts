import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(private route:ActivatedRoute,
              private cartService:CartService
  ) { }
  addToCart(product:string){
    this.cartService.addToCar(product);
    window.alert('your product has been added to the cart!')
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.product = products[+params.get('productId')];
    });
  }

}