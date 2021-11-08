import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart_list: Item[] = [];

  constructor(private http: HttpClient) { }

  addtoCart(item: Item) {
    this.cart_list.push(item);
    return this.cart_list
  }

  removeItem(item:Item):void {
    var idx = this.cart_list.indexOf(item);

    if(idx != -1){
      this.cart_list.splice(idx, 1)
    }
  }

  calculateTotalCart(){
    let total = 0;
    
    for (let i = 0; i<this.cart_list.length; i++){
      total += this.cart_list[i].price * this.cart_list[i].quantity;
    }
    return total;
  }
}
