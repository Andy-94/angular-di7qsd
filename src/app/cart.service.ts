import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  addToCar(product:string){
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearClear(){
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get('./assets/shipping.json');
  }
  constructor(private http: HttpClient) { }

}